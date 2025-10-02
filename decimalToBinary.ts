import assert from "node:assert/strict";

/**
 * Given a non-negative integer, return its binary
 * representation as a string
 * */
function toBinary(decimal: number): string {
  if (decimal < 2) return `${decimal}`;
  return toBinary(Math.floor(decimal / 2)) + `${decimal % 2}`;
}

assert.equal(toBinary(5), "101");
assert.equal(toBinary(12), "1100");
assert.equal(toBinary(50), "110010");
assert.equal(toBinary(99), "1100011");
