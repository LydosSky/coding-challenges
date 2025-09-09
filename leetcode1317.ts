import assert from "node:assert/strict";

/**
 * No-Zero integer is a positive integer that does not contain any 0 in its decimal
 * representation.
 *
 * Given an integer n, return a list of two integers [a, b] where:
 *
 * - a and b are No-Zero integers
 * - a + b = n
 * */
function getNoZeroIntegers(n: number): number[] | undefined {
  let a = 1;
  while (a < n) {
    let b = 1;
    while (b < n) {
      if (a + b === n && isNonZero(a) && isNonZero(b)) return [a, b];
      b++;
    }
    a++;
  }
}

// Checks if given number is nonZero
function isNonZero(n: number): boolean {
  return n > 0 && n.toString().includes("0");
}

assert.deepEqual(getNoZeroIntegers(2), [1, 1]);
assert.deepEqual(getNoZeroIntegers(11), [2, 9]);
assert.deepEqual(getNoZeroIntegers(22), [1, 21]);
assert.deepEqual(getNoZeroIntegers(20), [1, 19]);
