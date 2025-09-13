import assert from "node:assert/strict";

/**
 * Given an array of integers from 1 to n, inclusive, return an array of all
 * the missing integers between 1 and n (where n is the largest number in the
 * given array.)
 *
 * - The given array may be unsorted and may contain duplicates.
 * - The returned array should be in ascending order.
 * - If no integers are missing, return an empty array.
 **/
function findMissingNumbers(arr: Array<number>): Array<number> {
  arr.sort((a, b) => a - b);
  const newArr: Array<number> = [];
  const maximum = arr.pop();
  let currentNum = 1;

  while (maximum && currentNum < maximum) {
    if (!arr.includes(currentNum)) newArr.push(currentNum);
    currentNum++
  }
    

  return newArr;
}

assert.deepEqual(findMissingNumbers([1, 3, 5]), [2, 4]);
assert.deepEqual(findMissingNumbers([1, 2, 3, 4, 5]), []);
assert.deepEqual(findMissingNumbers([1, 10]), [2, 3, 4, 5, 6, 7, 8, 9]);
assert.deepEqual(
  findMissingNumbers([10, 1, 10, 1, 10, 1]),
  [2, 3, 4, 5, 6, 7, 8, 9],
);
assert.deepEqual(findMissingNumbers([3, 1, 4, 1, 5, 9]), [2, 6, 7, 8]);
assert.deepEqual(
  findMissingNumbers([1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 6, 8, 9, 3, 2, 10, 7, 4]),
  [11],
);
