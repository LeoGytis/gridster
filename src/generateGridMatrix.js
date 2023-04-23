export function generateGridMatrix(rows, columns) {
  const gridMatrix = [];

  for (let i = 0; i < rows; i++) {
    const row = new Array(columns).fill(1);
    gridMatrix.push(row);
  }

  return gridMatrix;
}

// export function generateGridMatrix(gridData) {
//   const gridMatrix = [];

//   for (let i = 0; i < gridData.rowsCount; i++) {
//     const row = new Array(gridData.columnsCount).fill(1);

//     if (
//       i === gridData.startNode[0] &&
//       gridData.startNode[1] < gridData.columnsCount
//     ) {
//       row[gridData.startNode[1]] = 0;
//     }

//     if (
//       i === gridData.endNode[0] &&
//       gridData.endNode[1] < gridData.columnsCount
//     ) {
//       row[gridData.endNode[1]] = 0;
//     }

//     gridMatrix.push(row);
//   }

//   return gridMatrix;
// }
