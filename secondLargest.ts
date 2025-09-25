import assert from "node:assert/strict";

/**
 * Given array returns second largest distinct number
 * */
function secondLargest(arr: number[]): number {
  return [...new Set(arr)].sort((a, b) => b - a)[1];
}

assert.equal(secondLargest([1, 2, 3, 4]), 3);
assert.equal(secondLargest([20, 139, 94, 67, 31]), 94);
assert.equal(secondLargest([2, 3, 4, 6, 6]), 4);
assert.equal(secondLargest([10, -17, 55.5, 44, 91, 0]), 55.5);
assert.equal(secondLargest([1, 0, -1, 0, 1, 0, -1, 1, 0]), 0);
