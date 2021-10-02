import styled from "styled-components";

export const CountryImage = styled.div<{ url: string }>`
  border-radius: 50%;
  background-image: url(${({ url }) => url});
  background-size: contain;
  height: 2rem;
  width: 2rem;
`;
