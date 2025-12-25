import assert from "assert/strict";

/**
 * Given an array of elements, return the element that
 * appears most frequently.
 *
 *   - There will always be a single most frequent element.
 * @param {[]any} arr
 * @param {any}
 * */
function mostFrequent(arr) {
    const counts = arr
        .map((value, idx) => {
            let counter = 1;
            for (let i = 0; i < arr.length; i++)
                if (arr[i] === value && idx !== i) counter += 1;
            return [value, counter];
        })
        .sort((a, b) => b[1] - a[1])[0][0];

    return counts;
}

assert.equal(mostFrequent(["a", "b", "a", "c"]), "a");
assert.equal(mostFrequent([2, 3, 5, 2, 6, 3, 2, 7, 2, 9]), 2);
assert.equal(mostFrequent([true, false, "false", "true", false]), false);
assert.equal(mostFrequent([40, 20, 70, 30, 10, 40, 10, 50, 40, 60]), 40);
