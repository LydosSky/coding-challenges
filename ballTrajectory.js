import assert from "assert/strict";

/**
 * Given a matrix that includes the location of the ball (2), and the previous
 * location of the ball (1), return the matrix indices for the next location of
 * the ball.
 *
 *   - The ball always moves in a straight line.
 *   - The movement direction is determined by how the ball moved from 1 to 2.
 *   - The edges of the matrix are considered walls. If the balls hit a:
 *       - Top or bottom wall, it bounces by reversing its vertical direction.
 *       - Left or right wall, it bounces by reversing its horizontal direction.
 *       - Corner, it bounces by reversing both directions.
 *
 *  @param {number[][]} matrix
 *  @returns {number}
 * */
function getNextLocation(matrix) {
    const N = matrix.length;
    let x, y, prev_x, prev_y;
    for (let i = 0; i < N; i++)
        for (let j = 0; j < N; j++)
            if (matrix[i][j] === 2) {
                x = i;
                y = j;
            } else if (matrix[i][j] === 1) {
                prev_x = i;
                prev_y = j;
            }
    const delta_x = x - prev_x;
    const delta_y = y - prev_y;
    let next_x = x + delta_x;
    let next_y = y + delta_y;

    if (next_x < 0 || next_x >= N) {
        next_x = x + -delta_x;
    }

    if (next_y < 0 || next_y >= N) {
        next_y = y + -delta_y;
    }

    return [next_x, next_y];
}

assert.deepEqual(
    getNextLocation([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 1, 2, 0],
        [0, 0, 0, 0],
    ]),
    [2, 3],
);

assert.deepEqual(
    getNextLocation([
        [0, 0, 0, 0],
        [0, 0, 1, 0],
        [0, 2, 0, 0],
        [0, 0, 0, 0],
    ]),
    [3, 0],
);

assert.deepEqual(
    getNextLocation([
        [0, 2, 0, 0],
        [1, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ]),
    [1, 2],
);

assert.deepEqual(
    getNextLocation([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [2, 0, 0, 0],
        [0, 1, 0, 0],
    ]),
    [1, 1],
);

assert.deepEqual(
    getNextLocation([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 2],
    ]),
    [2, 2],
);
