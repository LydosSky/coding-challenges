import assert from "node:assert/strict";

/**
 * Given a string representing a binary number, return its decimal equivalent as a
 * number.
 * */

function toDecimal(binary: string): number {
  return binary
    .split("")
    .reverse()
    .reduce(
      (previous, current, index) =>
        (previous += Math.pow(2, index) * Number(current)),
      0,
    );
}

assert.equal(toDecimal("101"), 5);
assert.equal(toDecimal("1010"), 10);
assert.equal(toDecimal("10010"), 18);
assert.equal(toDecimal("1010101"), 85);
