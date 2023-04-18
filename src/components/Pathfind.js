import React, { useEffect, useState } from "react";

const rows = 5;
const cols = 5;

const Pathfind = () => {
  const [Grid, setGrid] = useState([]);

  useEffect(() => {
    initalizeGrid();
  }, []);

  //Creates the grid
  const initalizeGrid = () => {
    const grid = new Array(cols);

    for (let i = 0; i < cols; i++) {
      grid[i] = new Array(rows);
    }

    setGrid(grid);
    createSpot(grid);
  };

  const createSpot = (grid) => {
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        grid[i][j] = new Spot(i, j);
      }
    }
  };

  //SPOT CONSTRUCTOR
  function Spot(i, j) {
    this.x = i;
    this.y = j;
    this.g = 0;
    this.f = 0;
    this.h = 0;
  }

  //Grid with Node component
  const gridWithNode = () => {
    <div>
      {Grid.map((row, rowIndex) => {
        return <div key={rowIndex}>{row.map((col, colIndex) => {})}</div>;
      })}
    </div>;
  };
  console.log("🚩 => grid:", Grid);

  return (
    <div>
      <h1>PathFind Component</h1>
    </div>
  );
};

export default Pathfind;
