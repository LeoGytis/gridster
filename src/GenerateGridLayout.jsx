import React, { useState } from 'react';
import styled from 'styled-components';

const GenerateGridLayout = () => {
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);

  const handleRowsChange = (event) => {
    setRows(event.target.value);
  };

  const handleColumnsChange = (event) => {
    setColumns(event.target.value);
  };

  const handleGenerateClick = () => {
    console.log(`Generating layout with ${rows} rows and ${columns} columns`);
    // Generate layout logic here
  };

  return (
    <MainContainer>
      <InputValue>
        Rows
        <GridInput type="text" min={1} max={20} value={rows} onChange={handleRowsChange} />
      </InputValue>
      x
      <InputValue>
        Columns
        <GridInput type="text" min={1} max={20} value={columns} onChange={handleColumnsChange} />
      </InputValue>

      <GenerateButton onClick={handleGenerateClick}>Generate</GenerateButton>
    </MainContainer>
  );
};

export default GenerateGridLayout;


const MainContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-content: flex-end;
  align-items: center;
  gap: 20px;
  padding: 20px 200px 20px 40px;
  background-color: #F1F1F1;
  border-radius: 5px;
`;

const InputValue = styled.div`
display: flex;
flex-direction: column;
`;

const GridInput = styled.input`
  width: 70px;
  height: 40px;
  margin-top: 4px;
  border-radius: 5px;
  border: 1px solid #dadada;
  font-size: 1.2rem;
  text-align: center;
`;

const GenerateButton = styled.button`
  background-color: #4A90E2;
  color: white;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #76B5FF;
  }
  &:active {
    background-color: #235896;
  }
`;