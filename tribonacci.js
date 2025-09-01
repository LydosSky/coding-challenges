import assert from "node:assert/strict";

/**
 * Given an array containing the first three numbers of a Tribonacci sequence,
 * and an integer representing the length of the sequence, return an array
 * containing the sequence of the given length.
 *
 * - Your function should handle sequences of any length greater than or equal
 * to zero
 * - If length is zero, return an empty array.
 * - Note that the starting numbers are part of the sequence.
 *
 * @param {Array<number>} startSequence
 * @param {number} length
 * @returns {Array<number>}
 * */
function tribonacciSequence(startSequence, length) {
    const newArr = [];
    if (length <= startSequence.length) return startSequence.slice(0, length);
    let index = 0;
    while (index < length) {
        if (index < 3) newArr.push(startSequence[index]);
        else
            newArr.push(
                newArr[index - 3] + newArr[index - 2] + newArr[index - 1],
            );
        index++;
    }

    return newArr;
}

assert.deepEqual(
    tribonacciSequence([0, 0, 1], 20),
    [
        0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136,
        5768, 10609, 19513,
    ],
);

assert.deepEqual(tribonacciSequence([21, 32, 43], 1), [21]);
assert.deepEqual(tribonacciSequence([0, 0, 1], 0), []);
assert.deepEqual(tribonacciSequence([10, 20, 30], 2), [10, 20]);
assert.deepEqual(tribonacciSequence([10, 20, 30], 3), [10, 20, 30]);
assert.deepEqual(
    tribonacciSequence([123, 456, 789], 8),
    [123, 456, 789, 1368, 2613, 4770, 8751, 16134],
);
