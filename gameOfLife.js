import assert from "assert/strict";

/**
 * Given a matrix (array of arrays) representing the current state of Conway's
 * Game of Life, return the next state of the matrix using these rules:
 *
 *   - Each cell is either 1 (alive) or 0 (dead).
 *   - A cell's neighbors are the up to eight surrounding cells (vertically,
 *   horizontally, and diagonally).
 *   - Cells on the edges have fewer than eight neighbors.
 *
 * Rules for updating each cell:
 *   - Any live cell with fewer than two live neighbors dies (underpopulation).
 *   - Any live cell with two or three live neighbors live on.
 *   - Any live cell with more than three live neighbors dies (overpopulation).
 *   - Any dead cell with exactly three live neighbors becomes alive (repreduction).
 *
 * @param {[][]number} grid
 * @returns {[][] number}
 * */
function gameOfLife(grid) {
    const row = grid.length;
    const col = grid[0].length;
    const newGrid = new Array(row);
    for (let i = 0; i < row; i++) {
        newGrid[i] = new Array(col);
        for (let j = 0; j < col; j++) {
            newGrid[i][j] = grid[i][j];
        }
    }

    for (let i = 0; i < row; i++)
        for (let j = 0; j < col; j++) {
            const nAlive = aliveNeighbours(grid, i, j);
            const curr = grid[i][j];
            if (curr === 1) {
                if (nAlive < 2 || nAlive > 3) {
                    newGrid[i][j] = 0;
                }
            } else {
            }
            if (curr === 0 && nAlive === 3) newGrid[i][j] = 1;
        }

    return newGrid;
}

/**
 * Helper function to count alive neighbours.
 *
 * @param {[][]number} grid
 * @param {number} row
 * @param {number} col
 * @returns {number}
 * */
function aliveNeighbours(grid, row, col) {
    const neighbours = getNeigbours(grid, row, col);
    let count = 0;
    for (let n of neighbours) if (grid[n[0]][n[1]] == 1) count += 1;

    return count;
}
/**
 * Get the valid neighbor locations of given cell.
 *
 * @param {[][]number} grid
 * @param {number} row
 * @param {number} col
 *
 * @returns {[][]number}
 * */
function getNeigbours(grid, row, col) {
    const rowSize = grid.length;
    const colSize = grid[0].length;
    const positions = [
        [-1, 0],
        [-1, 1],
        [0, 1],
        [1, 1],
        [1, 0],
        [1, -1],
        [0, -1],
        [-1, -1],
    ];
    const neighbours = [];
    for (let pos of positions) {
        const nRow = row + pos[0];
        const nCol = col + pos[1];
        if (nRow < 0 || nRow >= rowSize || nCol < 0 || nCol >= colSize)
            continue;
        neighbours.push([nRow, nCol]);
    }

    return neighbours;
}

assert.equal(
    aliveNeighbours(
        [
            [0, 1, 0],
            [0, 1, 1],
            [1, 1, 0],
        ],
        1,
        1,
    ),
    4,
);
assert.equal(
    aliveNeighbours(
        [
            [0, 1, 0],
            [0, 1, 1],
            [1, 1, 0],
        ],
        0,
        0,
    ),
    2,
);
assert.equal(
    aliveNeighbours(
        [
            [0, 1, 0],
            [0, 1, 1],
            [1, 1, 0],
        ],
        2,
        2,
    ),
    3,
);

assert.deepEqual(
    getNeigbours(
        [
            [0, 1, 0],
            [0, 1, 1],
            [1, 1, 0],
        ],
        0,
        0,
    ),
    [
        [0, 1],
        [1, 1],
        [1, 0],
    ],
);
assert.deepEqual(
    getNeigbours(
        [
            [0, 1, 0],
            [0, 1, 1],
            [1, 1, 0],
        ],
        2,
        2,
    ),
    [
        [1, 2],
        [2, 1],
        [1, 1],
    ],
);

assert.deepEqual(
    gameOfLife([
        [0, 1, 0],
        [0, 1, 1],
        [1, 1, 0],
    ]),
    [
        [0, 1, 1],
        [0, 0, 1],
        [1, 1, 1],
    ],
);
assert.deepEqual(
    gameOfLife([
        [1, 1, 0, 0],
        [1, 0, 1, 0],
        [0, 1, 1, 1],
        [0, 0, 1, 0],
    ]),
    [
        [1, 1, 0, 0],
        [1, 0, 0, 1],
        [0, 0, 0, 1],
        [0, 1, 1, 1],
    ],
);
assert.deepEqual(
    gameOfLife([
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
    ]),
    [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
    ],
);
assert.deepEqual(
    gameOfLife([
        [0, 1, 1, 0],
        [1, 1, 0, 1],
        [0, 1, 1, 0],
        [0, 0, 1, 0],
    ]),
    [
        [1, 1, 1, 0],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [0, 1, 1, 0],
    ],
);
