import React from 'react';
import styled from 'styled-components';

const GridLayout = ({ rows, columns }) => {
  return (
    <GridLayoutContainer rows={rows} columns={columns}>
      {Array(rows * columns)
        .fill()
        .map((_, i) => (
          <GridSquare key={i} />
        ))}
    </GridLayoutContainer>
  );
};

export default GridLayout;

const GridLayoutContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  grid-template-rows: repeat(${props => props.rows}, 1fr);
  background-color: #dadada;
`;

const GridSquare = styled.div`
 background-color: #F1F1F1;
  border: 1px solid #D9D9D9;
  height: 50px;
  width: 50px;
`;