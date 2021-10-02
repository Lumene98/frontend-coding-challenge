import React from "react";
import styled from "styled-components";
import { Book as BookType } from "../services/bookstore.service";
import Author from "./icons/Author";
import Book from "./icons/Book";

interface Props {
  books?: BookType[];
}

const Container = styled.table`
  text-align: left;
  flex: 1;
  border-collapse: collapse;

  & > thead {
    font-size: 1.5rem;
  }

  & > tbody > tr:first-of-type {
    border-bottom: 3px solid #ead2ac;
  }

  & > tbody > tr > td {
    padding: 0.4rem 0.4rem 0.4rem 0;
  }
`;

const BookInfoContainer = styled.div`
  display: flex;

  & > svg {
    margin-right: 0.5rem;
  }
`;

const BooksTable = ({ books }: Props) => {
  return (
    <Container>
      <thead>
        <tr>
          <th>Best-selling books</th>
        </tr>
      </thead>
      <tbody>
        {books ? (
          books
            .sort((book) => book.copiesSold)
            .slice(0, 2)
            .map(
              (book, key) =>
                book && (
                  <tr key={key}>
                    <td>
                      <BookInfoContainer>
                        <Book width={"16px"} height={"16px"} />
                        {book.name}
                      </BookInfoContainer>
                    </td>
                    <td>
                      <BookInfoContainer>
                        <Author width={"16px"} height={"16px"} />
                        {book.author?.fullName}
                      </BookInfoContainer>
                    </td>
                  </tr>
                )
            )
        ) : (
          <tr>
            <td>No data available</td>
          </tr>
        )}
      </tbody>
    </Container>
  );
};

export default BooksTable;
