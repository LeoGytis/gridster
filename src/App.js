import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GridController from "./GridController";
import GridLayout from "./GirdLayout";
import { Grid, AStarFinder } from "pathfinding";
import { generateGridMatrix } from "./generateGridMatrix";

function App() {
  const [gridData, setGridData] = useState({
    rowsCount: 10,
    columnsCount: 10,
    startNode: [0, 0],
    endNode: [9, 9]
  });
  // const [gridStartNode, setGridStartNode] = useState([0, 0]);
  // const [gridEndNode, setGridEndNode] = useState([9, 9]);
  const [gridMatrix, setGridMatrix] = useState([]);

  // useEffect(() => {
  //   setGridMatrix(newMatrix);
  // }, []);

  const handleGenerateGrid = ({
    rowsCount,
    columnsCount,
    startNode,
    endNode
  }) => {
    setGridData({ rowsCount, columnsCount, startNode, endNode });
  };

  return (
    <>
      <MainContainer>
        <SimpleContainer>
          <GridController onGenerate={handleGenerateGrid} />
          {gridData && (
            <GridLayout
              gridData={gridData}
              rowsCount={gridData.rowsCount}
              columnsCount={gridData.columnsCount}
              startNode={gridData.startNode}
              endNode={gridData.endNode}
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
