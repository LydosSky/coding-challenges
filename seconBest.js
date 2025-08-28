import assert from "node:assert/strict";
/**
 * Given an array of integers representing the price
 * of different laptops, and an integer representing
 * your budget, return:
 *
 * - The second mose expensive laptop if it is
 *   within your budget
 * - The most expensive laptop that is within your
 *   budget
 * - 0 if no laptops are within your budget
 * - Duplicate prices should be ignored.
 *
 * @param {Array<number>} laptops
 * @param {number} budget
 * @returns {number}
 * */
function getLaptopCost(laptops, budget) {
  const sortedLaptops = laptops.sort((a, b) => b - a).slice(1);
  for (let laptop of sortedLaptops) if (budget >= laptop) return laptop;
  return 0;
}
assert.equal(getLaptopCost([1500, 2000, 1800, 1400], 1900), 1800);
assert.equal(getLaptopCost([1500, 2000, 2000, 1800, 1400], 1900), 1800);
assert.equal(getLaptopCost([2099, 1599, 1899, 1499], 2200), 1899);
assert.equal(getLaptopCost([2099, 1599, 1899, 1499], 1000), 0);
assert.equal(getLaptopCost([1200, 1500, 1600, 1800, 1400, 2000], 1450), 1400);
