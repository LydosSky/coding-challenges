import assert from "node:assert/strict";

const NOLIMUNOSITY = 0;
const PERCENTAGE = 0.8;

assert.equal(hasExoplanet("665544554"), false);
assert.equal(hasExoplanet("FGFFCFFGG"), true);
assert.equal(hasExoplanet("MONOPLONOMONPLNOMPNOMP"), false);
assert.equal(hasExoplanet("FREECODECAMP"), true);
assert.equal(hasExoplanet("9AB98AB9BC98A"), false);
assert.equal(hasExoplanet("ZXXWYZXYWYXZEGZXWYZXYGEE"), true);

/**
 * Given a string where each character represents the luminosity reading
 * of a star. Determine if the readings have detected an exoplanet using
 * the transit method. The transit method is when a planet passes in front
 * of a start, reducing its observed luminosity.
 *
 * - Luminosity reading only comprise of characters 0-9 and A-Z where each
 * reading corresponds to the following numerical values:
 * - Characters 0-9 correspond to luminosity levels 0-9.
 * - Characters A-Z correspond to luminosity levels 10-35.
 *
 * A start is considered to have an exoplanet if any single reading is less than or
 * equal to 80% of the average of all readings. For example, if the average luminosity
 * of a star is 10, it would be considered to have a exoplanet if any single reading
 * is 8 or less.
 * */
function hasExoplanet(readings: string): boolean {
  const luminosities = readings.split("");
  let average =
    luminosities.reduce((prev, curr) => (prev += luminosityLevel(curr)), 0) /
    luminosities.length;
  return luminosities.some(
    (reading) => luminosityLevel(reading) <= average * PERCENTAGE,
  );
}

assert.equal(luminosityLevel("0"), 0);
assert.equal(luminosityLevel("9"), 9);
assert.equal(luminosityLevel("A"), 10);
assert.equal(luminosityLevel("H"), 17);
assert.equal(luminosityLevel("Z"), 35);
assert.equal(luminosityLevel("a"), 0);

/**
 * Given a single luminosity level returns corresponding
 * numerical value of it. With following rules:
 *
 * - Luminosity reading only comprise of characters 0-9 and A-Z where each
 * reading corresponds to the following numerical values:
 * - Characters 0-9 correspond to luminosity levels 0-9.
 * - Characters A-Z correspond to luminosity levels 10-35.
 * */
function luminosityLevel(value: string): number {
  if (/[A-Z]/.test(value)) return value.charCodeAt(0) - 55;
  else if (/[0-9]/.test(value)) return Number(value);
  else return NOLIMUNOSITY;
}
