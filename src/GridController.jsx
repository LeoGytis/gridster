import React, { useState } from 'react';
import styled from 'styled-components';

const GridController = ({ onGenerate }) => {
  const [rows, setRows] = useState(10);
  const [columns, setColumns] = useState(10);
  const startNode = [getRandomInt(0, rows ), 0]; // kodel nebuna 9?
  const endNode = [getRandomInt(0, rows), columns - 1]; 

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }

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
    onGenerate(rows, columns, startNode, endNode);
  };

  return (
    <MainContainer>
      <InputValue>
        Rows
        <GridInput type="text" placeholder="10" value={rows} onChange={handleRowsChange} />
      </InputValue>
      <Sign>
        x
      </Sign>
      <InputValue>
        Columns
        <GridInput type="text" placeholder="10" value={columns} onChange={handleColumnsChange} />
      </InputValue>

      <GenerateButton onClick={handleGenerateClick}>Generate</GenerateButton>
    </MainContainer>
  );
};

export default GridController;


const MainContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 16px;
  padding: 20px 150px 20px 40px;
  background-color: #F1F1F1;
  border-radius: 5px;
  margin-bottom: 40px;
`;

const InputValue = styled.div`
display: flex;
flex-direction: column;
`;

const Sign = styled.div`
  padding-bottom: 10px;
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
  padding: 12px 20px;
  margin-left: 10px;
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