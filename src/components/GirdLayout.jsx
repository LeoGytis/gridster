import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Grid, AStarFinder } from "pathfinding";
import { generateGridMatrix } from "../functions/generateGridMatrix";

const GridLayout = ({ gridData }) => {
  const [gridMatrix, setGridMatrix] = useState(generateGridMatrix(gridData));
  const [generatedPath, setGeneratedPath] = useState([]);

  useEffect(() => {
    setGridMatrix(generateGridMatrix(gridData));
  }, [gridData]);

  //Calculates the shortest path and updates the grid matrix state accordingly
  useEffect(() => {
    setGeneratedPath([]);
    const grid = new Grid(gridMatrix);
    const pathFinder = new AStarFinder();
    const path = pathFinder.findPath(
      gridData.startNode[1],
      gridData.startNode[0],
      gridData.endNode[1],
      gridData.endNode[0],
      grid
    );
    if (path.length > 0) {
      setGeneratedPath(path);
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
      generatedPath={generatedPath}
    >
      {gridMatrix.flat().map((value, i) => {
        const row = Math.floor(i / gridData.columnsCount); // Calculate the row based on its index
        const col = i % gridData.columnsCount; // Calculate the column based on its index

        if (row === gridData.startNode[0] && col === gridData.startNode[1]) {
          return <StartGridNode key={i} />;
        } else if (row === gridData.endNode[0] && col === gridData.endNode[1]) {
          return <EndGridNode key={i} />;
        } else if (value === 1) {
          return (
            <GridNode
              key={i}
              onClick={() => handleGridNodeClick(row, col)}
            ></GridNode>
          );
        } else if (
          generatedPath.length > 0 &&
          generatedPath.some(([c, r]) => r === row && c === col) // Check generatedPath and gridMatrix arrays
        ) {
          return (
            <PathGridNode
              key={i}
              onClick={() => handleClearNodeClick(row, col)}
            />
          );
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
  grid-template-columns: repeat(${({ columnsCount }) => columnsCount}, 1fr);
  grid-template-rows: repeat(${({ rowsCount }) => rowsCount}, 1fr);
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
