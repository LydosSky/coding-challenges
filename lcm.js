import assert from "assert/strict";

/**
 * Given two integer, return the least common multiple(LCM) of the two
 * numbers.
 *
 * The LCM of two numbers is the smallest positive integer that is
 * a multiple of both numbers.
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * */
function lcm(a, b) {
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }

    return (a * b) / gcd(a, b);
}

assert.equal(lcm(4, 6), 12);
assert.equal(lcm(9, 6), 18);
assert.equal(lcm(10, 100), 100);
assert.equal(lcm(13, 17), 221);
assert.equal(lcm(45, 70), 630);
