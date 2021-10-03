import React from "react";
import styled from "styled-components";

const BookstoreRatingContainer = styled.div`
  flex: 1 0 0;
  width: min(100px, 200px);
  display: flex;
  align-items: center;
`;

const BookstoreRatingSpan = styled.span<{ rating?: number }>`
  color: ${({ rating }) => (rating && rating != 5 ? "#ead2ac" : "#fff")};
  background-color: ${({ rating }) =>
    rating && rating != 5 ? "#f5e5d5" : "#ead2ac"};
  ${({ rating }) =>
    rating && rating != 5
      ? "box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);"
      : ""}
  padding: 0.3rem;
  border-radius: 30px;
  font-weight: bold;
`;

const BookstoreRatingBar = styled.div`
  flex: 1;
  height: 11px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
`;
const BookstoreRatingBarFill = styled.div<{ width: string }>`
  display: block;
  height: 11px;
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
  rating: number;
}

const BookstoreRating = ({ rating }: Props) => {
  return (
    <BookstoreRatingContainer>
      <BookstoreRatingSpan>1</BookstoreRatingSpan>
      <BookstoreRatingBar>
        <BookstoreRatingBarFill
          width={`${rating * 20}%`}
        ></BookstoreRatingBarFill>
      </BookstoreRatingBar>
      <BookstoreRatingSpan rating={rating}>5</BookstoreRatingSpan>
    </BookstoreRatingContainer>
  );
};

export default BookstoreRating;
