import assert from "assert/strict";

function buildMatrix(rows, cols) {
    return new Array(rows).fill(new Array(cols).fill(0));
}

assert.deepEqual(buildMatrix(2, 3), [
    [0, 0, 0],
    [0, 0, 0],
]);

assert.deepEqual(buildMatrix(3, 2), [
    [0, 0],
    [0, 0],
    [0, 0],
]);

assert.deepEqual(buildMatrix(4, 3), [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
]);

assert.deepEqual(buildMatrix(9, 1), [
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
]);
