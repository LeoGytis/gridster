import React, { useState } from 'react';
import styled from 'styled-components';
import { Grid, AStarFinder } from "pathfinding";


const GridLayout = ({ rows, columns}) => {

  const [gridStartNode, setGridStartNode] = useState([0, 0]);
  const [gridEndNode, setGridEndNode] = useState([9, 9]);

  const generatedGrid = new Grid(rows, columns);
  const pathFinder = new AStarFinder();

  const path = pathFinder.findPath(
    gridStartNode[0],
    gridStartNode[1],
    gridEndNode[0],
    gridEndNode[1],
    generatedGrid
  );

  return (
    <GridLayoutContainer rows={rows} columns={columns}>
      {Array(rows * columns)
        .fill()
        .map((_, i) => {
          const [startRow, startCol] = gridStartNode;
          const [endRow, endCol] = gridEndNode;

          const isPathNode = path.some(([row, col]) => row === Math.floor(i / columns) && col === i % columns);

          if (i === startRow * columns + startCol) {
            return <StartGridNode key={i} />;
          } else if (i === endRow * columns + endCol) {
            return <EndGridNode key={i} />;
          } else if (isPathNode) {
            return <PathGridNode key={i} />;
          } else {
            return <GridNode key={i} />;
          }
        })}
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

const GridNode = styled.button`
  background-color: #F1F1F1;
  border: 1px solid #D9D9D9;
  height: 50px;
  width: 50px;
  cursor: pointer;
  &:hover {
    background-color: #F8F8F8;
  }
  &:active {
    background-color: #E2E2E2;
  }
`;

const StartGridNode = styled(GridNode)`
  background-color: #7ED321;
`;

const EndGridNode = styled(GridNode)`
  background-color: #639530;
`;

const PathGridNode = styled(GridNode)`
  background-color: #FFD700;
`;