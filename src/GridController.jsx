import React, { useState } from "react";
import styled from "styled-components";

const GridController = ({ onGenerate }) => {
  const [gridData, setGridData] = useState({
    rowsCount: 10,
    columnsCount: 10,
    startNode: [getRandomInt(0, 10), 0],
    endNode: [getRandomInt(0, 10), 9]
  });

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
    setGridData({
      ...gridData,
      rowsCount: value
    });
  };

  const handleColumnsChange = (event) => {
    const value = parseInt(event.target.value);
    if (isNaN(value) || value < 1 || value > 20) {
      return;
    }
    setGridData({
      ...gridData,
      columnsCount: value
    });
  };

  const handleGenerateClick = () => {
    onGenerate(gridData);
  };

  return (
    <MainContainer>
      <InputValue>
        Rows
        <GridInput
          type="text"
          placeholder="10"
          value={gridData.rowsCount}
          onChange={handleRowsChange}
        />
      </InputValue>
      <Sign>x</Sign>
      <InputValue>
        Columns
        <GridInput
          type="text"
          placeholder="10"
          value={gridData.columnsCount}
          onChange={handleColumnsChange}
        />
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
  background-color: #f1f1f1;
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
  background-color: #4a90e2;
  color: white;
  border-radius: 5px;
  padding: 12px 20px;
  margin-left: 10px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #76b5ff;
  }
  &:active {
    background-color: #235896;
  }
`;
