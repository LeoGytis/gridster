import React, { useState } from "react";
import styled from "styled-components";
import GridController from "./components/GridController";
import GridLayout from "./components/GirdLayout";

function App() {
  const [gridData, setGridData] = useState({
    rowsCount: 10,
    columnsCount: 10,
    startNode: [0, 0],
    endNode: [9, 9]
  });

  const handleGenerateGrid = (gridData) => {
    setGridData(gridData);
  };

  return (
    <>
      <MainContainer>
        <SimpleContainer>
          <GridController handleGenerateGrid={handleGenerateGrid} />
          <GridLayout gridData={gridData} />
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
`;

const SimpleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
`;
