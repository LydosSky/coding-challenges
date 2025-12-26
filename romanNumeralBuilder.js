import assert from "assert/strict";

/**
 * Given an integer, return its equivalent value in Roman numerals.
 *
 * @param {number} num
 * @returns {string}
 * */

function toRoman(num) {
    let numeral = "";
    const nums = [
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"],
    ];
    for (let [n, v] of nums) {
        while (num >= n) {
            numeral += v;
            num -= n;
        }
    }

    return numeral;
}

assert.equal(toRoman(18), "XVIII");
assert.equal(toRoman(19), "XIX");
assert.equal(toRoman(1464), "MCDLXIV");
assert.equal(toRoman(2025), "MMXXV");
assert.equal(toRoman(3999), "MMMCMXCIX");
