import assert from "node:assert/strict";

const VOWELREGEX = /[aeiou]/i;

/**
 * Given a string, determine whether the number of vowels
 * in the first half of the string is equal to the number
 * of vowels in the second half.
 * - The string can contain any characters
 * - The letters a, e, i, o, and u, is either
 * uppercase or lowercase, are considered
 * vowels
 * - If there's an odd number of characters in the
 * string, ignore the center character.
 *
 * @param {string} str
 * @returns {boolean}
 *  */
function isBalanced(str) {
    const strArr = str.toLowerCase().split("");
    const lastChar = strArr.length - 1;
    const middle = Math.floor(strArr.length / 2);
    let leftHalf = 0;
    let rightHalf = 0;

    for (let i = 0; i < middle; i++) {
        if (VOWELREGEX.test(strArr[i])) leftHalf++;
        if (VOWELREGEX.test(strArr[lastChar - i])) rightHalf++;
    }

    return leftHalf === rightHalf;
}

assert.equal(isBalanced("racecar"), true);
assert.equal(isBalanced("Lorem Ipsum"), true);
assert.equal(isBalanced("Kitty Ipsum"), false);
assert.equal(isBalanced("string"), false);
assert.equal(isBalanced(" "), true);
assert.equal(isBalanced("abcdefghijklmnopqrstuvwxyz"), false);
assert.equal(isBalanced("123A#b!E&#x26;*456-o.U"), true);
