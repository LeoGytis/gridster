import React, { useState } from "react";
import styled from "styled-components";
import GridController from "./GridController";
import GridLayout from "./GirdLayout";
import { Grid, AStarFinder } from "pathfinding";

function App() {
  const [gridData, setGridData] = useState({ rows: 10, columns: 10 });
  const [gridStartNode, setGridStartNode] = useState();
  const [gridEndNode, setGridEndNode] = useState();

  const handleGenerateGrid = (rows, columns, startNode, endNode) => {
    setGridData({ rows, columns });
    setGridStartNode(startNode);
    setGridEndNode(endNode);
  };

  const grid = new Grid(gridData.rows, gridData.columns);
  const finder = new AStarFinder();

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
  // console.log("🚩 => path:", path);

  return (
    <>
      <MainContainer>
        <SimpleContainer>
          <GridController onGenerate={handleGenerateGrid} />
          {gridData && (
            <GridLayout
              rows={gridData.rows}
              columns={gridData.columns}
              start={gridStartNode}
              end={gridEndNode}
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
