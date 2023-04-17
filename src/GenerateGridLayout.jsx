import React, { useState } from 'react';
import styled from 'styled-components';

const GenerateGridLayout = ({ onGenerate }) => {
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);

  const handleRowsChange = (event) => {
    const value = parseInt(event.target.value);
    if (isNaN(value) || value < 1 || value > 20) {
      return;
    }
    setRows(value);
  };

  const handleColumnsChange = (event) => {
    const value = parseInt(event.target.value);
    if (isNaN(value) || value < 1 || value > 20) {
      return;
    }
    setColumns(value);
  };

  const handleGenerateClick = () => {
    onGenerate(rows, columns);
  };

  return (
    <MainContainer>
      <InputValue>
        Rows
        <GridInput type="text" value={rows} onChange={handleRowsChange} />
      </InputValue>
      x
      <InputValue>
        Columns
        <GridInput type="text" value={columns} onChange={handleColumnsChange} />
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