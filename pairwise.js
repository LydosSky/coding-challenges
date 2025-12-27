import assert from "assert/strict";

/**
 * Given an array of integers and a target number, find all pairs of elements
 * in the array whose values add up to the target and return the sum of their
 * indices.
 *
 * @param {[]number} arr
 * @param {number} target
 *
 * @returns {number}
 * */
function pairwise(arr, target) {
    const usedIndice = {};

    let total = 0;
    for (let i = 0; i < arr.length; i++)
        for (let j = i + 1; j < arr.length; j++)
            if (arr[i] + arr[j] === target)
                if (usedIndice[i] === undefined && usedIndice[j] === undefined)
                    total += i + j;

    return total;
}

assert.equal(pairwise([2, 3, 4, 6, 8], 10), 9);
assert.equal(pairwise([4, 1, 5, 2, 6, 3], 7), 15);
assert.equal(pairwise([-30, -15, 5, 10, 15, -5, 20, -40], -20), 22);
assert.equal(pairwise([7, 9, 13, 19, 21, 6, 3, 1, 4, 8, 12, 22], 24), 10);
