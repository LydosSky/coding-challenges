import assert from "node:assert/strict";

/**
 * Given an integer, determine if it is a perfect square.
 *
 * - A number is a perfect square if you can multiply an integer
 * by itself to achieve the number. For example, 9 is a perfect
 * square because you can multiply 3 by itselft to get it.
 * */
function isPerfectSquare(num: number): boolean {
  return Number.isInteger(Math.sqrt(num));
}

assert.equal(isPerfectSquare(9), true);
assert.equal(isPerfectSquare(49), true);
assert.equal(isPerfectSquare(1), true);
assert.equal(isPerfectSquare(2), false);
assert.equal(isPerfectSquare(99), false);
assert.equal(isPerfectSquare(-9), false);
assert.equal(isPerfectSquare(0), true);
assert.equal(isPerfectSquare(25281), true);
