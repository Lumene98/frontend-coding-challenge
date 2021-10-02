export interface Store {
  id: number;
  establishmentDate: Date | string;
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  storeImage: string;
  website: string;
  relationships: any;
  books?: Book[];
  country?: Country;
}

export interface Book {
  id: number;
  copiesSold: number;
  name: string;
  relationships: Object;
  author?: Author;
}

export interface Author {
  id: number;
  fullName: string;
}

export interface Country {
  id: number;
  url?: string;
  code: string;
}

const convertDate = (date: Date): string => {
  const splitedDate = new Date(date).toDateString().split("/");
  let formattedDate = "";
  for (const dateElement of splitedDate) {
    formattedDate +=
      Number(dateElement) < 10 ? `0${dateElement}/` : `${dateElement}/`;
  }

  return formattedDate.slice(0, -1);
};

const resolveCountryUrl = (country: Country) => {
  return {
    ...country,
    url: `${process.env.NEXT_PUBLIC_COUNTRY_API_URL}/${country.code}/flat/64.png`,
  };
};

const resolveSingleRelationship = (
  el: Book | Store,
  authors?: Author[],
  countries?: Country[]
) => {
  const { relationships } = el;
  if (relationships["countries"] && countries) {
    return countries.find(
      (country) => country.id === relationships["countries"].data.id
    );
  }
  if (relationships["author"] && authors) {
    return authors.find(
      (author) => author.id === relationships["author"].data.id
    );
  }
};

const resolveMultipleRelationship = (el: Store, resolvedBooks: Book[]) => {
  let resolvedRel;
  const { relationships } = el;
  const { books } = relationships;
  if (books && books.data.length) {
    resolvedRel = [];
    for (const rel of books.data) {
      resolvedRel.push(<Book>resolvedBooks.find((book) => book.id === rel.id));
    }
  }
  return resolvedRel;
};

export const fetchAndResolveRelationships = async () => {
  const authors = await fetchAuthors();
  const countries = await fetchCountries();

  const books = <Book[]>(await fetchBooks()).map((book) => {
    return {
      author: <Author>resolveSingleRelationship(book, authors),
      ...book,
    };
  });

  const stores = (await fetchStores()).map((store) => {
    const resolvedBooks = <Book[]>resolveMultipleRelationship(store, books);
    return resolvedBooks
      ? {
          books: resolvedBooks,
          country: <Country>(
            resolveSingleRelationship(store, undefined, countries)
          ),
          ...store,
          establishmentDate: convertDate(<Date>store.establishmentDate),
        }
      : {
          country: <Country>(
            resolveSingleRelationship(store, undefined, countries)
          ),
          ...store,
          establishmentDate: convertDate(<Date>store.establishmentDate),
        };
  });

  return stores;
};

const cleanResponse = (
  response: any[]
): Store[] | Book[] | Author[] | Country[] => {
  return response.map((rawStore) => {
    return {
      id: rawStore.id,
      ...rawStore.attributes,
      relationships: rawStore.relationships,
    };
  });
};

const fetchStores = async (): Promise<Store[]> => {
  try {
    const request = await (
      await fetch(`${process.env.NEXT_PUBLIC_BOOKSTORE_API_URL}/stores`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).json();

    return <Store[]>cleanResponse(request.data);
  } catch (e) {
    console.error("Error in fetchStores: ", e);
    return [];
  }
};

const fetchBooks = async (): Promise<Book[]> => {
  try {
    const request = await (
      await fetch(`${process.env.NEXT_PUBLIC_BOOKSTORE_API_URL}/books`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).json();

    return <Book[]>cleanResponse(request.data);
  } catch (e) {
    console.error("Error in fetchBooks: ", e);
    return [];
  }
};

const fetchAuthors = async (): Promise<Author[]> => {
  try {
    const request = await (
      await fetch(`${process.env.NEXT_PUBLIC_BOOKSTORE_API_URL}/authors`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).json();

    return <Author[]>cleanResponse(request.data);
  } catch (e) {
    console.error("Error in fetchAuthors: ", e);
    return [];
  }
};

const fetchCountries = async (): Promise<Country[]> => {
  try {
    const request = await (
      await fetch(`${process.env.NEXT_PUBLIC_BOOKSTORE_API_URL}/countries`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).json();

    return <Country[]>(
      cleanResponse(request.data).map((country) =>
        resolveCountryUrl(<Country>country)
      )
    );
  } catch (e) {
    console.error("Error in fetchCountries: ", e);
    return [];
  }
};
