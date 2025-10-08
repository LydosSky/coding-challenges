import assert from "node:assert/strict";

/**
 * Given the mass of a star, return an array with the start and end
 * distances of its Goldilocks Zone in Astronomical Units.
 *
 * To calculate the Goldilocks Zone:
 * - Find he luminosity of the start by raising its mass to power of
 * 3.5
 * - The start of the zone is 0.95 times the square root of its luminosity.
 * - The end of the zone is 1.37 times the square root of its luminosity.
 *
 * Return the distances rounded to two decimal places.
 * */
function goldilocksZone(mass: number): number[] {
  const luminosity = Math.pow(mass, 3.5);
  const zoneStart = Math.sqrt(luminosity) * 0.95;
  const zoneEnd = Math.sqrt(luminosity) * 1.37;
  return [rounder(zoneStart, 100), rounder(zoneEnd, 100)];
}

assert.deepEqual(goldilocksZone(1), [0.95, 1.37]);
assert.deepEqual(goldilocksZone(0.5), [0.28, 0.41]);
assert.deepEqual(goldilocksZone(6), [21.85, 31.51]);
assert.deepEqual(goldilocksZone(3.7), [9.38, 13.52]);
assert.deepEqual(goldilocksZone(20), [179.69, 259.13]);

function rounder(number: number, decimalPlaces: number): number {
  return Math.round(number * decimalPlaces) / decimalPlaces;
}

assert.equal(rounder(1.2123, 1), 1);
assert.equal(rounder(1.2123, 10), 1.2);
assert.equal(rounder(1.2123, 100), 1.21);
assert.equal(rounder(1.2123, 1000), 1.212);
