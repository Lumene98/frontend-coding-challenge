import React from "react";

interface Props {
  width: string;
  height: string;
}

const Book = ({ width, height }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 489.9 489.9"
  >
    <path d="M131.75 409.1c-28.8 0-52.1 18.3-52.1 40.4 0 22.6 23.3 40.4 52.1 40.4h278.4c-22.6-24.1-22.6-56.8 0-80.9h-278.4v.1zM120.15 1.9c-23.3 7-40.4 32.7-40.4 63.8v342.2c10.5-9.3 24.9-15.9 40.4-17.9V1.9zM244.95 0v99.2l-40.1-25.3-40 25.3V0h-24.9v388.9h270.3V0z"></path>
  </svg>
);

export default Book;
