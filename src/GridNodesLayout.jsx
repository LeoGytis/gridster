import React from 'react';
import styled from 'styled-components';

const GridNodesLayout = ({ rows, columns, start, end, path }) => {
  return (
    <GridLayoutContainer rows={rows} columns={columns}>
      {Array(rows * columns)
        .fill()
        .map((_, i) => {
          const [startRow, startCol] = start;
          const [endRow, endCol] = end;

          const isPathSquare = path.some(([row, col]) => row === Math.floor(i / columns) && col === i % columns);

          if (i === startRow * columns + startCol) {
            return <StartGridSquare key={i} />;
          } else if (i === endRow * columns + endCol) {
            return <EndGridSquare key={i} />;
          } else if (isPathSquare) {
            return <PathGridSquare key={i} />;
          } else {
            return <GridSquare key={i} />;
          }
        })}
    </GridLayoutContainer>
  );
};

export default GridNodesLayout;

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

const StartGridSquare = styled(GridSquare)`
  background-color: #7ED321;
`;

const EndGridSquare = styled(GridSquare)`
  background-color: #639530;
`;

const PathGridSquare = styled(GridSquare)`
  background-color: #FFD700;
`;