import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(20, 30px);
  grid-template-rows: repeat(20, 30px);
  gap: 1px;
  background-color: #ddd;
  padding: 10px;
`;

const Square = styled.div`
  width: 30px;
  height: 30px;
  background-color: #fff;
  border: 1px solid #ccc;
`;

function SquareGrid() {
  const squares = [];

  // Create an array of 400 Square components
  for (let i = 0; i < 400; i++) {
    squares.push(<Square key={i} />);
  }

  return <Grid>{squares}</Grid>;
}

export default SquareGrid;
