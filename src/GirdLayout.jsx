import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Grid, AStarFinder, BiAStarFinder, JumpPointFinder } from "pathfinding";
import { generateGridMatrix } from "./generateGridMatrix";

const GridLayout = ({ gridData }) => {
  const [gridMatrix, setGridMatrix] = useState(generateGridMatrix(gridData));
  // console.log("🚩 => gridMatrix:", gridMatrix);
  const [gridLayout, setGridLayout] = useState(new Grid(10, 10));
  const [startX, startY] = gridData.startNode;
  const [endX, endY] = gridData.endNode;

  useEffect(() => {
    setGridMatrix(generateGridMatrix(gridData));
  }, [gridData]);

  useEffect(() => {
    const grid = new Grid(gridMatrix);
    console.log("🚩 => gridMatrix:", gridMatrix);
    console.log("🚩 => grid:", grid);
    var gridBackup = grid.clone();

    const pathFinder = new AStarFinder();
    // var newPath = Util.smoothenPath(grid, path);

    const path = pathFinder.findPath(startX, startY, endX, endY, gridBackup);
    console.log("🚩 => path:", path);

    if (path.length > 0) {
      for (const [row, col] of path) {
        setGridMatrix((prevGridMatrix) => {
          const newGridMatrix = [...prevGridMatrix];
          newGridMatrix[row][col] = 2;
          return newGridMatrix;
        });
      }
    }
  }, [gridMatrix]);

  // useEffect(() => {
  //   console.log("🚩 => gridMatrix:", gridMatrix);
  // }, [gridMatrix]);

  // grid.setWalkableAt(5, 5, false);
  // var gridBackup = grid.clone();

  const handleNodeClick = (row, col) => {
    const updatedMatrix = [...gridMatrix];
    updatedMatrix[row][col] = 0;
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
              onClick={() => handleNodeClick(row, col)}
            ></GridNode>
          );
        } else if (value === 2) {
          return <PathGridNode key={i} />;
        } else {
          return <ClearGridNode key={i} />;
        }
      })}
    </GridLayoutContainer>
  );

  // return (
  // <GridLayoutContainer rowsCount={rowsCount} columnsCount={columnsCount}>
  //   {Array(grid.height * grid.width)
  //     .fill()
  //     .map((_, i) => {
  //       const [startRow, startCol] = startNode;
  //       const [endRow, endCol] = endNode;

  //       const row = Math.floor(i / columnsCount);
  //       const col = i % columnsCount;

  //       const isPathNode = path.some(([r, c]) => r === row && c === col);
  //       const isClearNode = grid.nodes[i] && grid.nodes[i].walkable;

  //       if (row === startRow && col === startCol) {
  //         return <StartGridNode key={i} />;
  //       } else if (row === endRow && col === endCol) {
  //         return <EndGridNode key={i} />;
  //       } else if (isPathNode) {
  //         return <PathGridNode key={i} />;
  //       } else if (isClearNode) {
  //         return <ClearGridNode key={i} />;
  //       } else {
  //         return (
  //           <GridNode key={i} onClick={() => handleNodeClick(row, col)}>
  //             {row} - {col}
  //           </GridNode>
  //         );
  //       }
  //     })}
  // </GridLayoutContainer>;
  // );
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
  background-color: #7ed321;
`;

const EndGridNode = styled(GridNode)`
  background-color: #639530;
`;

const PathGridNode = styled(GridNode)`
  background-color: #ffd700;
`;

const ClearGridNode = styled(GridNode)`
  background-color: pink;
`;
