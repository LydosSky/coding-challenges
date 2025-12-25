import assert from "assert/strict";

/**
 * Given a weight in pounds as a number, return the string
 * "(lbs) pounds equals (kgs) kilograms.".
 *   - 1 pound equals 0.453592 kilograms.
 *
 * @param {number} lbs
 * @return {number}
 * */
function convertToKgs(lbs) {
    let kg = Math.round(lbs * 0.453592 * 100) / 100;
    return `${lbs} ${lbs === 1 ? "pound" : "pounds"} equals ${kg.toFixed(2)} ${kg === 1 ? "kilogram" : "kilograms"}.`;
}

assert.equal(convertToKgs(1), "1 pound equals 0.45 kilograms.");
assert.equal(convertToKgs(0), "0 pounds equals 0.00 kilograms.");
assert.equal(convertToKgs(100), "100 pounds equals 45.36 kilograms.");
assert.equal(convertToKgs(2.5), "2.5 pounds equals 1.13 kilograms.");
assert.equal(convertToKgs(2.20462), "2.20462 pounds equals 1.00 kilogram.");
