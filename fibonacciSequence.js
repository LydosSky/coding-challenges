import assert from "node:assert/strict";

/**
 * Given an array containing the first two numbers
 * of a Fibonnaci sequence, and an integer representing
 * the length of the sequence, return an array containing
 * the sequence of the given length
 *
 * - Your function should handle sequences of any length
 * greater than or equal to zero.
 * - If the length is zero, return an empty array.
 * - Note that the starting numbers are part of the
 * sequence.
 *
 * @param {Array<number>} starter
 * @param {number} length
 * @returns {Array<number>}
 * */
function fibonacciSequence(starter, length) {
  const sequence = [];
  if (length <= 2) return starter.slice(0, length);

  for (let i = 0; i < length; i++) {
    if (i < 2) sequence[i] = starter[i];
    else sequence[i] = sequence[i - 1] + sequence[i - 2];
  }

  return sequence;
}

assert.deepEqual(
  fibonacciSequence([0, 1], 20),
  [
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
    2584, 4181,
  ]
);

assert.deepEqual(fibonacciSequence([21, 32], 1), [21]);
assert.deepEqual(fibonacciSequence([0, 1], 0), []);
assert.deepEqual(fibonacciSequence([10, 20], 2), [10, 20]);
assert.deepEqual(
  fibonacciSequence([123456789, 987654321], 5),
  [123456789, 987654321, 1111111110, 2098765431, 3209876541]
);
