import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Grid, AStarFinder } from "pathfinding";
import { generateGridMatrix } from "../functions/generateGridMatrix";

const GridLayout = ({ gridData }) => {
  const [gridMatrix, setGridMatrix] = useState(generateGridMatrix(gridData));
  const [startX, startY] = gridData.startNode;
  const [endX, endY] = gridData.endNode;

  useEffect(() => {
    setGridMatrix(generateGridMatrix(gridData));
  }, [gridData]);

  //Calculates the shortest path and updates the grid matrix state accordingly
  useEffect(() => {
    const grid = new Grid(gridMatrix);
    const pathFinder = new AStarFinder();
    const path = pathFinder.findPath(startY, startX, endY, endX, grid);

    if (path.length > 0) {
      const gridMatrixPath = [...gridMatrix];
      for (const [row, col] of path) {
        gridMatrixPath[col][row] = 2;
      }
      setGridMatrix(gridMatrixPath);
    }
  }, [gridMatrix]);

  const handleGridNodeClick = (row, col) => {
    const updatedMatrix = [...gridMatrix];
    updatedMatrix[row][col] = 0;
    setGridMatrix(updatedMatrix);
  };

  const handleClearNodeClick = (row, col) => {
    const updatedMatrix = [...gridMatrix];
    updatedMatrix[row][col] = 1;
    setGridMatrix(updatedMatrix);
  };

  return (
    <GridLayoutContainer
      rowsCount={gridData.rowsCount}
      columnsCount={gridData.columnsCount}
    >
      {gridMatrix.flat().map((value, i) => {
        const row = Math.floor(i / gridData.columnsCount);
        const col = i % gridData.columnsCount;
        const [startRow, startCol] = gridData.startNode;
        const [endRow, endCol] = gridData.endNode;

        if (row === startRow && col === startCol) {
          return <StartGridNode key={i} />;
        } else if (row === endRow && col === endCol) {
          return <EndGridNode key={i} />;
        } else if (value === 1) {
          return (
            <GridNode
              key={i}
              onClick={() => handleGridNodeClick(row, col)}
            ></GridNode>
          );
        } else if (value === 2) {
          return <PathGridNode key={i} />;
        } else {
          return (
            <ClearGridNode
              key={i}
              onClick={() => handleClearNodeClick(row, col)}
            />
          );
        }
      })}
    </GridLayoutContainer>
  );
};

export default GridLayout;

const GridLayoutContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columnsCount}, 1fr);
  grid-template-rows: repeat(${(props) => props.rowsCount}, 1fr);
  background-color: #dadada;
`;

const GridNode = styled.button`
  background-color: #f1f1f1;
  border: 1px solid #d9d9d9;
  height: 50px;
  width: 50px;
  cursor: pointer;
  &:hover {
    background-color: #f8f8f8;
  }
  &:active {
    background-color: #e2e2e2;
  }
`;

const StartGridNode = styled(GridNode)`
  cursor: auto;
  background-color: #7ed321;
  pointer-events: none;
`;

const EndGridNode = styled(GridNode)`
  cursor: auto;
  background-color: #639530;
  pointer-events: none;
`;

const PathGridNode = styled(GridNode)`
  background-color: #f5a623;
`;

const ClearGridNode = styled(GridNode)`
  background-color: #ffffff;
`;
