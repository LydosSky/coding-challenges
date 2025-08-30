import assert from "node:assert/strict";

/**
 * Given an array of integers, return an array of integers
 * that appear more than once in the initial array, sorted
 * in ascending order. If no values appear more than once,
 * return an empty array.
 *
 * - Only include one instance of each value in the returned
 * array.
 *
 * @param {Array<number>} arr
 * @returns {Array<number>}
 * */
function findDuplicates(arr) {
    const duplicates = [];
    for (let [idx, num] of arr.entries())
        if (arr.slice(idx + 1).includes(num) && !duplicates.includes(num))
            duplicates.push(num);
    return duplicates.sort((a, b) => a - b);
}

assert.deepEqual(findDuplicates([1, 2, 3, 4, 5]), []);
assert.deepEqual(findDuplicates([1, 2, 3, 4, 1, 2]), [1, 2]);
assert.deepEqual(
    findDuplicates([
        2, 34, 0, 1, -6, 23, 5, 3, 2, 5, 67, -6, 23, 2, 43, 2, 12, 0, 2, 4, 4,
    ]),
    [-6, 0, 2, 4, 5, 23],
);
