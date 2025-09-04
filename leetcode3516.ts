import assert from "node:assert/strict";

/**
 * Given three integers x,y, and z  representing the positions of three people
 * on a number line:
 *
 * - x is the position of Person 1
 * - y is the position of Person 2
 * - z is the position of Person 3
 *
 * Both Person 1 and Person 2 move toward Person 3 at the same speed
 * Determine which person reaches Person 3 first:
 *
 * - Return 1 if Person 1 arrives first.
 * - Return 2 if Person 2 arrives first.
 * - Return 0 if both arrive at the same time.
 * */
function findClosest(x: number, y: number, z: number): number {
  const xToZ = Math.abs(x - z);
  const yToZ = Math.abs(y - z);
  return xToZ === yToZ ? 0 : xToZ < yToZ ? 1 : 2;
}

assert.equal(findClosest(2, 7, 4), 1, "Case 1");
assert.equal(findClosest(2, 5, 6), 2, "Case 2");
assert.equal(findClosest(1, 5, 3), 0, "Case 3");
