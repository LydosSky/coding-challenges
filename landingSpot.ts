import assert from "node:assert/strict";

/**
 * Given a matrix of numbers representing potential landing spots
 * for your rover. Find the safest landing spot based on the following:
 *
 * - Each spot in the matrix will contain a number from 0-9, inclusive.
 * - Any 0 represents a potential landing spot.
 * - Any number othe than 0 is too dangerous to land. The higher the
 * number, the more dangerous.
 * - The safest spot is defined as the 0 zell whose surrounding cells
 * (up to 4 neighbours, ignore diagonals) have the lowest total danver.
 * - Ignore out-of-bounds neighbord (corners and edges just have fewer neighbors)
 * - Return the indices of the safest landing spot. There will always only be
 * one sagest spot.
 * */
function findLandingSpot(matrix: Array<Array<number>>): Array<number> {
  let safestSpot: [number, number] = [-1, -1];
  let lowestTotalDanger = Infinity;
  for (let i = 0; i < matrix.length; i++)
    for (let j = 0; j < matrix[i].length; j++) {
      let currentTotalDanger = 0;
      if (matrix[i][j] === 0) {
        if (matrix[i + 1]) currentTotalDanger += matrix[i + 1][j];
        if (matrix[i - 1]) currentTotalDanger += matrix[i - 1][j];
        if (matrix[i][j - 1]) currentTotalDanger += matrix[i][j - 1];
        if (matrix[i][j + 1]) currentTotalDanger += matrix[i][j + 1];
        if (currentTotalDanger < lowestTotalDanger)  {
          lowestTotalDanger = currentTotalDanger
          safestSpot = [i, j];
        }
      }
    }
  return safestSpot;
}

assert.deepEqual(
  findLandingSpot([
    [1, 0],
    [2, 0],
  ]),
  [0, 1],
);
assert.deepEqual(
  findLandingSpot([
    [9, 0, 3],
    [7, 0, 4],
    [8, 0, 5],
  ]),
  [1, 1],
);
assert.deepEqual(
  findLandingSpot([
    [1, 2, 1],
    [0, 0, 2],
    [3, 0, 0],
  ]),
  [2, 2],
);
assert.deepEqual(
  findLandingSpot([
    [9, 6, 0, 8],
    [7, 1, 1, 0],
    [3, 0, 3, 9],
    [8, 6, 0, 9],
  ]),
  [2, 1],
);
