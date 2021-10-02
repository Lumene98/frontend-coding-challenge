import React from "react";
import styled from "styled-components";

const Container = styled.span`
  padding: 6px 12px;

  color: #fff;

  background: #353945;
  border-radius: 100px;

  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
  display: inline-block;

  & > a:hover {
    color: #f5e5d5;
  }
`;

interface Props {
  establishmentDate: string;
  website: string;
}

const DateURLPlaceholder = ({ establishmentDate, website }: Props) => {
  return (
    <Container>
      {establishmentDate} -{" "}
      <a href={website} target="_blank" rel="noreferrer">
        {website}
      </a>
    </Container>
  );
};

export default DateURLPlaceholder;
