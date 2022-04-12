const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
for (let i = 0; i < listOfNeighbours.length; i++) {
  let row = listOfNeighbours[i];
  for (let j = 0; j < row.length; j++) {
    console.log(`Neighbour:${listOfNeighbours[i][j]}`);
  }
}
