import assert from "node:assert/strict";

/**
 * Given an integer representing the number of cards to pick from the deck,
 * return the number of unique combinations of cards you can pick.
 *
 * @param {number} number
 * @returns {number}
 * */
function combinations(number) {
    function factorial(number) {
        if (number === 0) return 1;
        return number * factorial(number - 1);
    }
    return factorial(52) / (factorial(number) * factorial(52 - number));
}

assert.equal(combinations(52), 1);
assert.equal(combinations(1), 52);
assert.equal(combinations(2), 1326);
assert.equal(combinations(5), 2598960);
assert.equal(combinations(10), 15820024220);
assert.equal(combinations(50), 1326);
