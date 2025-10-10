import assert from "node:assert/strict";

/**
 * Given the mass in kilograms(kg) of a payload you want to send to
 * orbit. Determine the amount of fuel needed to send your payload
 * to orbit using the following rules:
 *
 * - Rockets require 1kg of fuel per 5kg of mass they must lift
 * - Fuel itself has mass. So when you add fuel, the mass to lift
 * goes up, which requires more fuel, which increases the mass, and
 * so on.
 * - To calculate the total fuel needed: start with the payload mass,
 * calculate the fuel needed for that, add that to the total mass, and
 * calculate again. Repeat this process until the additional fuel
 * required is less than kg, then stop.
 * - Ignore the mass of the rocket itself. Only compute fuel needed to lift
 * the payload and its own fuel.
 * */
function launchFuel(payload: number): number {
  let fuelPayload = payload / 5;
  let totalMass = payload + fuelPayload;
  let additionalFuel = Infinity;

  while (additionalFuel > 1) {
    additionalFuel = totalMass / 5 - fuelPayload;
    fuelPayload += additionalFuel;
    totalMass += additionalFuel;
  }

  return Math.round(fuelPayload * 10) / 10;
}

assert.equal(launchFuel(50), 12.4);
assert.equal(launchFuel(500), 124.8);
assert.equal(launchFuel(243), 60.7);
assert.equal(launchFuel(11000), 2749.8);
assert.equal(launchFuel(6214), 1553.4);
