import assert from "node:assert/strict";

/**
 * Given an input array of seven integers, representing a week's time, where
 * each integer is the amount of hours spent on your phone that day, determine
 * if it is too much screen time based on these constraints
 *
 * - If any single day has 10 hours or more, it's too much.
 * - If the average of any three days in a row is greater than
 * or equal to 8 hours, it's too much.
 * - If the average of the seven days is greater than or equal to
 * 6 hours, it's too much
 *
 * */

function tooMuchScreenTime(hours: Array<number>): boolean {
  let threeInRow = false;
  let average = false;
  let total = 0;

  for (let i = 0; i < hours.length; i++) {
    if (hours[i] >= 10) return true;
    if (i >= 2 && !threeInRow)
      threeInRow = (hours[i - 2] + hours[i - 1] + hours[i]) / 3 >= 8;
    total += hours[i];
  }
  average = total / hours.length >= 6;

  return threeInRow || average;
}

assert.equal(tooMuchScreenTime([1, 2, 3, 4, 5, 6, 7]), false);
assert.equal(tooMuchScreenTime([7, 8, 8, 4, 2, 2, 3]), false);
assert.equal(tooMuchScreenTime([5, 6, 6, 6, 6, 6, 6]), false);
assert.equal(tooMuchScreenTime([1, 2, 3, 11, 1, 3, 4]), true);
assert.equal(tooMuchScreenTime([1, 2, 3, 10, 2, 1, 0]), true);
assert.equal(tooMuchScreenTime([3, 3, 5, 8, 8, 9, 4]), true);
assert.equal(tooMuchScreenTime([3, 9, 4, 8, 5, 7, 6]), true);
