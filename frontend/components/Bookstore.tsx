import styled from "styled-components";
import { Store } from "../services/bookstore.service";
import BooksTable from "./BooksTable";
import BookstoreImage from "./BookstoreImage";
import BookstoreRating from "./BookstoreRating";
import { CountryImage } from "./CountryImage";
import DateURLPlaceholder from "./DateURLPlaceholder";

const Container = styled.div<{ delay: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
  margin-bottom: 4rem;
  border-left: 3px solid #ead2ac;
  border-right: 3px solid #ead2ac;

  animation: fade-in 2s ${({ delay }) => delay} cubic-bezier(0.6, 0, 0.4, 1)
    both 1;
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateX(-300px);
    }
    to {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`;

const Infos = styled.div`
  display: flex;
  margin-bottom: 2rem;

  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
`;

const AdditionalInfos = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
`;

const DateURLContainer = styled.div`
  flex: 1;

  @media (max-width: 400x) {
    width: 100vw;
  }
`;

const NamePlaceholder = styled.h1`
  flex: 1;
  margin: 0;
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
`;

const TitleAndBooksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  width: 100%;

  @media (max-width: 700px) {
    flex-wrap: wrap;
    margin-left: 0;
  }
`;

interface Props {
  store: Store;
  delay: string;
}

const Bookstore = ({ store, delay }: Props) => (
  <Container delay={delay}>
    <Infos>
      <BookstoreImage url={store.storeImage} />
      <TitleAndBooksContainer>
        <NameContainer>
          <NamePlaceholder>{store.name}</NamePlaceholder>
          <BookstoreRating rating={store.rating} />
        </NameContainer>
        <BooksTable books={store.books} />
      </TitleAndBooksContainer>
    </Infos>

    <AdditionalInfos>
      <DateURLContainer>
        <DateURLPlaceholder
          establishmentDate={store.establishmentDate.toString()}
          website={store.website}
        />
      </DateURLContainer>
      <CountryImage
        url={store.country?.url ? store.country.url : ""}
      ></CountryImage>
    </AdditionalInfos>
  </Container>
);
export default Bookstore;
