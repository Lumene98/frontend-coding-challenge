import React from "react";
import styled from "styled-components";

const BookstoreRatingContainer = styled.div`
  flex: 1 0 0;
  width: min(100px, 200px);
`;
const BookstoreRatingBar = styled.div`
  border-radius: 3px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
`;
const BookstoreRatingBarFill = styled.div<{ width: string }>`
  display: block;
  height: 22px;
  background-color: #ead2ac;
  border-radius: 3px;
  max-width: ${({ width }) => width};
  width: 0;
  animation: fill 3s 2s forwards;

  @keyframes fill {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
`;

interface Props {
  width: string;
}

const BookstoreRating = ({ width }: Props) => {
  return (
    <BookstoreRatingContainer>
      <BookstoreRatingBar>
        <BookstoreRatingBarFill width={width}></BookstoreRatingBarFill>
      </BookstoreRatingBar>
    </BookstoreRatingContainer>
  );
};

export default BookstoreRating;
