import assert from "node:assert/strict";

/**
 * Given the size of a fuel tank, the current level, and the price per gallon,
 * return the cost to fill the tank all the way.
 *
 * - The returned value should be rounded to two decimal places in the
 *   format: '$d.dd'
 * */

function costToFill(
  tankSize: number,
  fuelLevel: number,
  pricePerGallon: number,
): string {
  return `$${((tankSize - fuelLevel) * pricePerGallon).toFixed(2)}`;
}

assert.equal(costToFill(20, 0, 4.0), "$80.00");
assert.equal(costToFill(15, 10, 3.5), "$17.50");
assert.equal(costToFill(18, 9, 3.25), "$29.25");
assert.equal(costToFill(12, 12, 4.99), "$0.00");
assert.equal(costToFill(15, 9.5, 3.98), "$21.89");
