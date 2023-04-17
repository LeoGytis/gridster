import React from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: ${props => props.width}px;
  margin: 20px;
`;

const GridItem = styled.div`
  width: 40px;
  height: 40px;
  background-color: #ccc;
  border: 1px solid #999;
`;

const GridLayout = ({ rows, columns, onGenerate }) => {
  const gridWidth = columns * 40;
  const gridItems = Array.from({ length: rows * columns }, (_, i) => (
    <GridItem key={i} />
  ));

  return (
    <>
      <GridContainer width={gridWidth}>{gridItems}</GridContainer>
    </>
  );
};

export default GridLayout;
