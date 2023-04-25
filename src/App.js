import React, { useState } from "react";
import styled from "styled-components";
import GridController from "./components/GridController";
import GridLayout from "./components/GirdLayout";
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
  /* background-color: #282c34; */
`;

const SimpleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 100px;
  background-color: white;
`;

const GridsterLogo = styled.img`
  width: 50%;
  align-self: flex-start;
  padding-bottom: 30px;
`;
