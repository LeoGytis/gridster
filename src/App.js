import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GridController from "./GridController";
import GridLayout from "./GirdLayout";
import Logo from "./task/Gridster-Logo.png";

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
          <GridsterLogo src={Logo} />
          <GridController onGenerate={handleGenerateGrid} />
          {gridData && <GridLayout gridData={gridData} />}
        </SimpleContainer>
      </MainContainer>
    </>
  );
}

// npm install -d -g gulp

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
  padding: 20px 100px;
  background-color: white;
`;

const GridsterLogo = styled.img`
  display: flex;
  align-self: flex-start;
  padding-bottom: 40px;
`;
