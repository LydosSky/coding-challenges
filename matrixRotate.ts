import assert from "node:assert/strict";

type Matrix = Array<Array<number>>;

/**
 * Given a matix, rotate the matrix 90 degrees clockwise and return it.
 * */
function rotate(matrix: Matrix): Matrix {
  const newMatrix: Matrix = [];

  // fill new array with temporary numbers
  for (let i = 0; i < matrix.length; i++) {
    newMatrix[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      newMatrix[i].push(-1);
    }
  }

  // Transpose the given array
  for (let i = 0; i < matrix.length; i++)
    for (let j = 0; j < matrix[i].length; j++) newMatrix[j][i] = matrix[i][j];

  // Reverse each row
  for (let i = 0; i < newMatrix.length; i++)
    newMatrix[i] = newMatrix[i].reverse();

  return newMatrix;
}

assert.deepEqual(
  rotate([
    [1, 2],
    [3, 4],
  ]),
  [
    [3, 1],
    [4, 2],
  ],
);
assert.deepEqual(rotate([[1]]), [[1]]);
assert.deepEqual(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
  [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3],
  ],
);
assert.deepEqual(
  rotate([
    [0, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ]),
  [
    [0, 1, 0],
    [0, 0, 1],
    [0, 1, 0],
  ],
);
