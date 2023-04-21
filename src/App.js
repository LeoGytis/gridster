import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GridController from "./GridController";
import GridLayout from "./GirdLayout";
import { Grid, AStarFinder } from "pathfinding";
import { generateGridMatrix } from "./generateGridMatrix";

function App() {
  const [gridData, setGridData] = useState({ rowsCount: 10, columnsCount: 10 });
  const [gridStartNode, setGridStartNode] = useState([0, 0]);
  const [gridEndNode, setGridEndNode] = useState([9, 9]);
  const [gridMatrix, setGridMatrix] = useState([]);

  // useEffect(() => {
  //   setGridMatrix(newMatrix);
  // }, []);

  const handleGenerateGrid = (rowsCount, columnsCount, startNode, endNode) => {
    setGridData({ rowsCount, columnsCount });
    setGridStartNode(startNode);
    setGridEndNode(endNode);
    // setGridMatrix(generateGridMatrix(rows, columns));
  };

  // const grid = new Grid(gridData.rows, gridData.columns);
  // const newGrid = new Grid(gridMatrix);
  // const finder = new AStarFinder();

  // const start = grid.getNode(0, 0);
  // const end = grid.getNode(3, 2);
  // const path = finder.findPath(start, end, grid);
  // const path = finder.findPath(
  //   gridStartNode[0],
  //   gridStartNode[1],
  //   gridEndNode[0],
  //   gridEndNode[1],
  //   grid
  // );

  return (
    <>
      <MainContainer>
        <SimpleContainer>
          <GridController onGenerate={handleGenerateGrid} />
          {gridData && (
            <GridLayout
              rowsCount={gridData.rowsCount}
              columnsCount={gridData.columnsCount}
              gridStartNode={gridStartNode}
              gridEndNode={gridEndNode}
              // path={path}
            />
          )}
        </SimpleContainer>
      </MainContainer>
    </>
  );
}

export default App;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #282c34;
`;

const SimpleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px;
  background-color: white;
`;
