import React, { useState } from "react";
import styled from "styled-components";
import GridController from "./GridController";
import GridLayout from "./GirdLayout";

function App() {
  const [gridData, setGridData] = useState({ rows: 10, columns: 10 });

  const handleGenerate = (rows, columns) => {
    setGridData({ rows, columns });
  };

  return (
    <>
      <MainContainer>
        <SimpleContainer>
          <GridController onGenerate={handleGenerate} />
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
