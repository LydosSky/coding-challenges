import assert from "assert/strict";

/**
 *  Given an array of values, remove all occurrences of the most frequently
 *  occuring element and return the resulting array. On tie all removed.
 *
 *  @param {[]any} arr
 *  @returns {[]any}
 * */
function purgeMostFrequent(arr) {
    const counts = {};
    for (let val of arr) {
        if (counts[val] === undefined) counts[val] = 1;
        else counts[val]++;
    }

    let most;
    for (let key in counts) {
        if (most == undefined) most = key;
        else if (counts[key] > counts[most]) most = key;
    }

    const newArr = [];
    for (let val of arr)
        if (val == most) continue;
        else newArr.push(val);

    return newArr;
}

assert.deepEqual(purgeMostFrequent([1, 2, 2, 3]), [1, 3]);
assert.deepEqual(
    purgeMostFrequent(["a", "b", "d", "b", "c", "d", "c", "d", "c", "d"]),
    ["a", "b", "b", "c", "c", "c"],
);
assert.deepEqual(
    purgeMostFrequent(["red", "blue", "green", "red", "blue", "green", "blue"]),
    ["red", "green", "red", "green"],
);
assert.deepEqual(purgeMostFrequent([5, 5, 5, 5]), []);
