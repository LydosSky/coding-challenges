import assert from "assert/strict";

/**
 * Given a string, return the number of distinct permutations that can be formed from
 * its characters.
 *   - A permutation is any reordering of the characters in the string.
 *   - Do not count duplicate permutations.
 *   - If the string contains repeated characters, repeated arrangements should only,
 *   be counted once.
 *   - The string will contain only letters (A-Z, a-z).
 *
 * @param {string} str
 * @returns {number}
 * */
function countPermutations(str) {
    const letters = str.split("");
    const frequency = new Map();

    for (const letter of letters)
        frequency.set(letter, (frequency.get(letter) || 0) + 1);

    function fact(number) {
        if (number === 0) return 1;
        else return number * fact(number - 1);
    }

    let numOfPermutations = fact(letters.length);
    let nonDistinctPermutations = 1;
    for (const k of frequency.values()) {
        nonDistinctPermutations *= fact(k);
    }

    return numOfPermutations / nonDistinctPermutations;
}

assert.equal(countPermutations("abb"), 3);
assert.equal(countPermutations("abc"), 6);
assert.equal(countPermutations("racecar"), 630);
assert.equal(countPermutations("freecodecamp"), 39916800);
