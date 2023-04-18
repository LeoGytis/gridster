import React, { useEffect, useState } from "react";
import Node from "./Node.js";
import "./Pathfind.css";

const rows = 10;
const cols = 10;

const NODE_START_ROW = 0;
const NODE_START_COL = 0;
const NODE_END_ROW = rows - 1;
const NODE_END_COL = cols - 1;

const Pathfind = () => {
  const [Grid, setGrid] = useState([]);

  useEffect(() => {
    initalizeGrid();
  }, []);

  //Creates the grid
  const initalizeGrid = () => {
    const grid = new Array(rows);

    for (let i = 0; i < rows; i++) {
      grid[i] = new Array(cols);
    }

    setGrid(grid);
    createSpot(grid);
    addNeighbours(grid);
  };

  const createSpot = (grid) => {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        grid[i][j] = new Spot(i, j);
      }
    }
  };

  //Add neighbours
  const addNeighbours = (grid) => {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        grid[i][j].addneighbours(grid);
      }
    }
  };

  //SPOT CONSTRUCTOR
  function Spot(i, j) {
    this.x = i;
    this.y = j;
    this.isStart = this.x === NODE_START_ROW && this.y === NODE_START_COL;
    this.isEnd = this.x === NODE_END_ROW && this.y === NODE_END_COL;
    this.g = 0;
    this.f = 0;
    this.h = 0;
    this.neighbours = [];
    // this.previous = 0;
    this.addneighbours = function (grid) {
      let i = this.x;
      let j = this.y;
      if (i > 0) this.neighbours.push(grid[i - 1][j]);
      if (i < rows - 1) this.neighbours.push(grid[i + 1][j]);
      if (j > 0) this.neighbours.push(grid[i][j - 1]);
      if (i < cols - 1) this.neighbours.push(grid[i][j + 1]);
    };
  }

  //Grid with Node component
  const gridWithNode = (
    <div>
      {Grid.map((row, rowIndex) => {
        return (
          <div key={rowIndex} className="row-wrapper">
            {row.map((col, colIndex) => {
              const { isStart, isEnd } = col;
              return (
                <Node
                  key={colIndex}
                  isStart={isStart}
                  isEnd={isEnd}
                  row={rowIndex}
                  col={colIndex}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="grid-wrapper">
      <h1>PathFind Component</h1>
      {gridWithNode}
    </div>
  );
};

export default Pathfind;
