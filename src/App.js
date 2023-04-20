import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GridController from "./GridController";
import GridLayout from "./GirdLayout";
import { Grid, AStarFinder } from "pathfinding";
import { generateGridMatrix } from "./generateGridMatrix";

function App() {
  const [gridData, setGridData] = useState({ rows: 10, columns: 10 });
  const [gridStartNode, setGridStartNode] = useState([0, 0]);
  const [gridEndNode, setGridEndNode] = useState([9, 9]);
  const [gridMatrix, setGridMatrix] = useState([]);

  // useEffect(() => {
  //   setGridMatrix(newMatrix);
  // }, []);

  const handleGenerateGrid = (rows, columns, startNode, endNode) => {
    setGridData({ rows, columns });
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
              rows={gridData.rows}
              columns={gridData.columns}
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
