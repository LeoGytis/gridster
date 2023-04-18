function Astar(startNode, endNode) {
  let openSet = []; //nodes that have to be visited
  let closeSet = []; // nodes that already visited
  let path = [];

  openSet.push(startNode);
  while (openSet.length > 0) {
    let leastIndex = 0;
    for (let i = 0; i < openSet.length; i++) {
      if (openSet[i].f < openSet[leastIndex].f) {
        leastIndex = i;
      }
    }

    let current = openSet[leastIndex];

    // if ()
  }
}
