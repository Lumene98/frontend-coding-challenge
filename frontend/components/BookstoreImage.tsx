import styled from "styled-components";

const BookstoreImage = styled.div<{ url: string }>`
  border-radius: 40%;
  background-image: url(${({ url }) => url});
  background-size: cover;
  height: auto;
  min-width: 20%;
  flex: 1;

  @media (max-width: 700px) {
    flex: 0;
    height: 100px;
    width: 20%;
  }
`;

export default BookstoreImage;
