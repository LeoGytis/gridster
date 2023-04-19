export function generateGridMatrix(rows, columns) {
  const gridMatrix = [];

  for (let i = 0; i < rows; i++) {
    const row = new Array(columns).fill(0);
    gridMatrix.push(row);
  }

  return gridMatrix;
}
