import assert from "assert/strict";

/**
 * Given two positive integers, return their greatest common divisor.
 *   - The GCD of two integers is the largest number that divides evenly
 *   into both numbers without leaving a remainder.
 * */
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

assert.equal(gcd(4, 6), 2);
assert.equal(gcd(20, 15), 5);
assert.equal(gcd(13, 17), 1);
assert.equal(gcd(654, 456), 6);
assert.equal(gcd(3456, 4320), 864);
