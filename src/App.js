import React, { useState } from "react";
import styled from "styled-components";
import GenerateGridLayout from "./GenerateGridLayout";
import GridLayout from "./GirdLayout";

function App() {
  const [gridData, setGridData] = useState(null);

  const handleGenerate = (rows, columns) => {
    console.log(`Generating grid with ${rows} rows and ${columns} columns`);
    setGridData({ rows, columns });
    console.log("🚩 => setGridData:", gridData.rows);
    console.log("🚩 => setGridData:", gridData.columns);
  };

  return (
    <>
      <MainContainer>
        <SimpleContainer>
          <GenerateGridLayout onGenerate={handleGenerate} />
          {gridData && (
            <GridLayout rows={gridData.rows} columns={gridData.columns} />
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
  padding: 100px;
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
