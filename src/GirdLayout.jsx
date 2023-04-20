import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Grid, AStarFinder } from "pathfinding";
import { generateGridMatrix } from "./generateGridMatrix";

const GridLayout = ({ rows, columns, gridStartNode, gridEndNode }) => {
  const [gridMatrix, setGridMatrix] = useState([]);

  // useEffect(() => {
  //   setGridMatrix(generateGridMatrix(rows, columns));
  //   console.log("🚩 => gridMatrix:", gridMatrix);
  // }, []);

  function setAllNodesUnwalkable(obj) {
    obj.nodes.forEach((row) => {
      row.forEach((node) => {
        node.walkable = false;
      });
    });
  }

  const grid = new Grid(rows, columns);
  console.log("🚩 => grid:", grid);
  const pathFinder = new AStarFinder();

  const path = pathFinder.findPath(
    gridStartNode[0],
    gridStartNode[1],
    gridEndNode[0],
    gridEndNode[1],
    grid
  );
  // grid.setWalkableAt(5, 5, false);
  // grid.setWalkableAt(0, 1, false);
  // grid.setWalkableAt(0, 2, false);
  // grid.setWalkableAt(0, 3, false);
  // grid.setWalkableAt(0, 4, false);

  const handleNodeClick = (row, col) => {
    grid.setWalkableAt(row, col, true);
  };

  return (
    <GridLayoutContainer rows={rows} columns={columns}>
      {Array(grid.height * grid.width)
        .fill()
        .map((_, i) => {
          const [startRow, startCol] = gridStartNode;
          const [endRow, endCol] = gridEndNode;

          const row = Math.floor(i / columns);
          const col = i % columns;

          const isPathNode = path.some(([r, c]) => r === row && c === col);
          const isClearNode = grid.nodes[i] && !grid.nodes[i].walkable;

          if (row === startRow && col === startCol) {
            return <StartGridNode key={i} />;
          } else if (row === endRow && col === endCol) {
            return <EndGridNode key={i} />;
          } else if (isPathNode) {
            return <PathGridNode key={i} />;
          } else if (isClearNode) {
            return <ClearGridNode key={i} />;
          } else {
            return (
              <GridNode key={i} onClick={() => handleNodeClick(row, col)}>
                {row} - {col}
              </GridNode>
            );
          }
        })}
    </GridLayoutContainer>
  );
};

export default GridLayout;

const GridLayoutContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  grid-template-rows: repeat(${(props) => props.rows}, 1fr);
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
  background-color: yellowgreen;
`;
