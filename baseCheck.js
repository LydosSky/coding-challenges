import assert from "node:assert/strict";

/**
 * Given a string representing a number, and an
 * integer base from 2 to 36, determine whether
 * the number is valid in that base
 *
 * - The string may contain integer and uppercase
 * or lowercse characters
 * - The check should be case-insensitive
 * - The base can be any number 2-36
 * - A number is valid if every character is a valid
 * digit in the given base.
 * - Example of valid digits for bases:
 *   - Base 2: 0 - 1
 *   - Base 8: 0 - 7
 *   - Base 10: 0 - 9
 *   - Base 16: 0 - 9 and A - F
 *   - Base 36: 0 - 9 and A - Z
 *
 * @param {string} n
 * @param {number} base
 * @returns {boolean}
 * */
function isValidNumber(n, base) {
    const charArray = n.toUpperCase().split("");
    for (let char of charArray)
        if (Number.isNaN(parseInt(char, base))) return false;

    return true;
}

assert.equal(isValidNumber("10101", 2), true);
assert.equal(isValidNumber("10201", 2), false);
assert.equal(isValidNumber("76543210", 8), true);
assert.equal(isValidNumber("9876543210", 8), false);
assert.equal(isValidNumber("9876543210", 10), true);
assert.equal(isValidNumber("ABC", 10), false);
assert.equal(isValidNumber("ABC", 16), true);
assert.equal(isValidNumber("Z", 36), true);
assert.equal(isValidNumber("ABC", 20), true);
assert.equal(isValidNumber("4B4BA9", 16), true);
assert.equal(isValidNumber("5G3F8F", 16), false);
assert.equal(isValidNumber("5G3F8F", 17), true);
assert.equal(isValidNumber("abc", 10), false);
assert.equal(isValidNumber("abc", 16), true);
assert.equal(isValidNumber("AbC", 16), true);
assert.equal(isValidNumber("z", 36), true);
