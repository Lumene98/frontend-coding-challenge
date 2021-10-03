import styled from "styled-components";

const BookstoreImage = styled.div<{ url: string }>`
  border-radius: 40%;
  background-image: url(${({ url }) => url});
  background-size: cover;
  height: auto;
  min-height: 150px;
  min-width: 20%;
  flex: 1;

  @media (max-width: 700px) {
    flex: 0 0 50%;
    height: 100px;
    width: 20%;
    margin-bottom: 1rem;
  }
`;

export default BookstoreImage;
