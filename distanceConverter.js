import assert from "assert/strict";

/**
 * Given a distance in miles as a number, returns the equivalent distance in kilometers.
 *   - The input always will be a non-negative number.
 *   - 1 miles equals 1.60934 kilometers.
 *   - Rounds result to two decimal places.
 *
 *   @param {number} miles
 *   @returns {number}
 */
function mToKm(miles) {
  return Math.round(miles * 1.60934 * 100) / 100;
}

// assert.equal(mToKm(1), 1.61);
assert.equal(mToKm(21), 33.8);
assert.equal(mToKm(3.5), 5.63);
assert.equal(mToKm(0), 0);
assert.equal(mToKm(0.621371), 1.61);
