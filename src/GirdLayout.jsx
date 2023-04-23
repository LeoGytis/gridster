import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Grid, AStarFinder } from "pathfinding";
import { generateGridMatrix } from "./generateGridMatrix";

const GridLayout = ({ gridData }) => {
  const [gridMatrix, setGridMatrix] = useState(generateGridMatrix(10, 10));
  console.log("🚩 => gridMatrix:", gridMatrix);
  const [gridLayout, setGridLayout] = useState(new Grid(10, 10));
  // const [startX, startY] = gridData.gridStartNode;
  // const [endX, endY] = gridData.gridEndNode;

  // const grid = new Grid(rowsCount, columnsCount);

  useEffect(() => {
    setGridMatrix(
      generateGridMatrix(gridData.rowsCount, gridData.columnsCount)
    );
    const grid = new Grid(gridMatrix);
    setGridLayout(grid);
    // console.log("🚩 => gridLayout:", gridLayout);
  }, [gridData]);

  useEffect(() => {
    // const grid = new Grid(gridMatrix);
    // const pathFinder = new AStarFinder();
    // const path = pathFinder.findPath(
    //   gridData.startNode[0],
    //   gridData.startNode[1],
    //   gridData.endNode[0],
    //   gridData.endNode[1],
    //   grid
    // );
    // console.log("🚩 => path:", path);
  }, [gridMatrix]);

  // const path = pathFinder.findPath(startX, startY, endX, endY, grid);

  // const path = pathFinder.findPath(
  //   gridData.gridStartNode[0],
  //   gridData.gridStartNode[1],
  //   gridData.gridEndNode[0],
  //   gridData.gridEndNode[1],
  //   grid
  // );

  // grid.setWalkableAt(5, 5, false);
  // var gridBackup = grid.clone();

  const handleNodeClick = (row, col) => {
    const updatedMatrix = [...gridMatrix];
    updatedMatrix[row][col] = 0;
    setGridMatrix(updatedMatrix);

    // const grid = new Grid(gridMatrix);
    // const pathFinder = new AStarFinder();

    // const path = pathFinder.findPath(
    //   gridData.gridStartNode[0],
    //   gridData.gridStartNode[1],
    //   gridData.gridEndNode[0],
    //   gridData.gridEndNode[1],
    //   grid
    // );
    // console.log("🚩 => path:", path);
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
  background-color: white;
`;
