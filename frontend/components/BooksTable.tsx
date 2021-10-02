import React from "react";
import styled from "styled-components";
import { Book } from "../services/bookstore.service";

interface Props {
  books?: Book[];
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

const BooksTable = ({ books }: Props) => {
  return (
    <Container>
      <thead>
        <tr>
          <th>Books</th>
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
                    <td>{book.name}</td>
                    <td>{book.author?.fullName}</td>
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
