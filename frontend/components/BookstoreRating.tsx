import React from "react";
import styled from "styled-components";

const BookstoreRatingContainer = styled.div`
  flex: 1 0 0;
  width: min(100px, 200px);
  display: flex;
  align-items: center;
`;

const BookstoreRatingSpan = styled.span<{ rating?: number }>`
  color: #000;
  margin: 0 0.5rem;
  padding: 3px 6px;
  color: #fff;
  background: #353945;
  border-radius: 100px;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
  display: inline-block;
`;

const BookstoreRatingBar = styled.div<{ filled: boolean; delay: string }>`
  flex: 1;
  height: 11px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
  background-color: ${({ filled }) => (filled ? "#ead2ac" : "")};
  margin-right: 0.2rem;
  opacity: 0;
  animation: fill 3s ${({ delay }) => delay} forwards;

  @keyframes fill {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
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
      {Array.from(Array(5), (e, key) => (
        <BookstoreRatingBar
          key={key}
          filled={key < rating}
          delay={`${1 + Number(key) / 2}s`}
        />
      ))}
      <BookstoreRatingSpan>5</BookstoreRatingSpan>
    </BookstoreRatingContainer>
  );
};

export default BookstoreRating;
