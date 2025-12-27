import assert from "assert/strict";

/**
 *  Given an array with two numbers, the first being the number of rows and the
 *  second being the number of columns, return a matrix (an array of arrays)
 *  filled with "X" and "O" characters of the given size.
 *
 *    - The characters should alternate like a checkerboard.
 *    - The top-left cell must always be "X".
 *  @param {[number, number]} dimensions
 *  @returns {[][] string}
 * */
function createBoard(dimensions) {
    const row = dimensions[0];
    const col = dimensions[1];

    const board = new Array(row);
    let evenMarkers = ["X", "O"];
    let oddMarkers = ["O", "X"];
    for (let r = 0; r < row; r++) {
        board[r] = new Array(col);
        for (let c = 0; c < col; c++) {
            if (r % 2 === 0) {
                board[r][c] = evenMarkers[c % 2];
            } else {
                board[r][c] = oddMarkers[c % 2];
            }
        }
    }

    return board;
}

assert.deepEqual(createBoard([3, 3]), [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["X", "O", "X"],
]);
assert.deepEqual(createBoard([6, 1]), [
    ["X"],
    ["O"],
    ["X"],
    ["O"],
    ["X"],
    ["O"],
]);

assert.deepEqual(createBoard([2, 10]), [
    ["X", "O", "X", "O", "X", "O", "X", "O", "X", "O"],
    ["O", "X", "O", "X", "O", "X", "O", "X", "O", "X"],
]);
assert.deepEqual(createBoard([5, 4]), [
    ["X", "O", "X", "O"],
    ["O", "X", "O", "X"],
    ["X", "O", "X", "O"],
    ["O", "X", "O", "X"],
    ["X", "O", "X", "O"],
]);
