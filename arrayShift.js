import assert from "assert/strict";

/**
 * Given an array and an integer representing how many positions to shift the
 * array, return the shifted array.
 *   - A positive integer shifts the array to the left.
 *   - A negative integer shifts the array to the right.
 *   - The shift wraps around the array.
 *
 *   @param {T[]} array
 *   @return {T[]}
 * */
function shiftArray(array, shift) {
    const copyArray = new Array(array.length).fill(null);
    function mod(n, m) {
        return ((n % m) + m) % m;
    }

    function shiftIndex(index, amount, length) {
        return mod(index - amount + length, length);
    }

    for (let i = 0; i < array.length; i++) {
        const new_index = shiftIndex(i, shift, array.length);
        copyArray[new_index] = array[i];
    }

    return copyArray;
}

assert.deepEqual(shiftArray([1, 2, 3], 1), [2, 3, 1]);
assert.deepEqual(shiftArray([1, 2, 3], -1), [3, 1, 2]);
assert.deepEqual(shiftArray(["alpha", "bravo", "charlie"], 5), [
    "charlie",
    "alpha",
    "bravo",
]);
assert.deepEqual(shiftArray(["alpha", "bravo", "charlie"], -11), [
    "bravo",
    "charlie",
    "alpha",
]);
assert.deepEqual(
    shiftArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 15),
    [5, 6, 7, 8, 9, 0, 1, 2, 3, 4],
);
