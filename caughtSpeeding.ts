import assert from "node:assert/strict";

/**
 * Given an array of numbers representing the speed at which vehicles were observed
 * traveling, and a number representing the speed limit, return an array with two
 * items, the number of vehicles that were speeding, followed by the average amount
 * beyond the speed limit of those vehicles.
 * - if there were no vehicles speeding, return [0, 0]
 * */
function speeding(speeds: number[], limit: number): number[] {
  let overLimit = 0;
  let averageOverLimit = 0;
  return speeds.reduce(
    (prev, curr) => {
      if (curr > limit) {
        averageOverLimit *= overLimit;
        overLimit++;
        averageOverLimit = (averageOverLimit + (curr - limit)) / overLimit;
      }

      return [overLimit, averageOverLimit];
    },
    [overLimit, averageOverLimit],
  );
}

assert.deepEqual(speeding([50, 60, 55], 60), [0, 0]);
assert.deepEqual(speeding([58, 50, 60, 55], 55), [2, 4]);
assert.deepEqual(speeding([61, 81, 74, 88, 65, 71, 68], 70), [4, 8.5]);
assert.deepEqual(speeding([100, 105, 95, 102], 100), [2, 3.5]);
assert.deepEqual(speeding([40, 45, 44, 50, 112, 39], 55), [1, 57]);
