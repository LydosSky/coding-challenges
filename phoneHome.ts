import assert from "node:assert/strict";

/**
 * Given an array of numbers representing distances (in kilometers) between
 * yourself, satellites, and your home planet in a communication route.
 * Determine how long it will take a message sent through the route to reach
 * its destination planet using the following constraints:
 *
 * - The first value in the array is the distance from your location to
 * the first satellite.
 * - Each subsequent value, except for the last, is the distance to the next
 * satellite.
 * - The last value in the array is the distance from the previous satellite
 * to your home planet.
 * - The mesage travels at 300,000 km/s.
 * _ Each satellite the message passes through adds a 0.5 second transmission
 * delay.
 * - Return a number rounded to 4 decimal places, with trailing zeros removed.
 * */
function sendMessage(route: Array<number>): number {
  const SPEEDOFTRAVEL = 300000;
  const delay = (route.length - 1) * 0.5;
  const totalDistance = route.reduce((curr, prev) => (prev += curr), 0);
  const seconds = totalDistance / SPEEDOFTRAVEL + delay;
  return Math.round(seconds * 10000) / 10000;
}

assert.equal(sendMessage([300000, 300000]), 2.5);
assert.equal(sendMessage([384400, 384400]), 3.0627);
assert.equal(sendMessage([54600000, 54600000]), 364.5);
assert.equal(sendMessage([1000000, 500000000, 1000000]), 1674.3333);
assert.equal(sendMessage([10000, 21339, 50000, 31243, 10000]), 2.4086);
assert.equal(sendMessage([802101, 725994, 112808, 3625770, 481239]), 21.1597);
