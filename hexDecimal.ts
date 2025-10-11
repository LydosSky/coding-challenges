import assert from "node:assert/strict";

/**
 * Given a string representing a hexadicimal number, return its decimal value
 * as an integer.
 * Hexadecimal is a number system taht uses 16 digits:
 * - 0-9 represents values 0 through 9.
 * - A-F represents values 10 throught 15.
 * */

function hexToDecimal(hex: string): number {
  return hex
    .split("")
    .reverse()
    .reduce(
      (prev, curr, index) => (prev += Math.pow(16, index) * parseInt(curr, 16)),
      0,
    );
}

assert.equal(hexToDecimal("A"), 10);
assert.equal(hexToDecimal("15"), 21);
assert.equal(hexToDecimal("2E"), 46);
assert.equal(hexToDecimal("FF"), 255);
assert.equal(hexToDecimal("A3F"), 2623);
