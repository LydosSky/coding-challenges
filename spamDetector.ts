import assert from "node:assert/strict";

/**
 * Given a phone number in the format "+A (BBB) CCC-DDDD", where each
 * letter represents a digit as follows:
 *
 * - A represents the country code and can be any number of digits.
 * - BBB represents the area code and will always be three digits.
 * - CCC and DDDD represent the local number and will always be
 * three and four digits long, respectively
 *
 * Determine if it's a spam number based on the following criteria:
 *
 * - The country code is greater than 2 digits long or doesn't begin with
 *  a zero
 * - The area code is greater than 900 or less than 200.
 * - The sum of first three digits of the local number appears within last
 * four digits of the local number.
 * - The number has the same digit four or more times in a row (ignoring
 * the formatting chracters).
 *
 * */
function isSpam(num: string): boolean {
  const stripNum = num.replace(/[()+]/g, "").replace(/-/g, " ");
  const REPEATREGEX = /(\d)\1{3,}/g;
  const [country, area, localLeft, localRight] = stripNum.split(" ");
  const testRepeat = REPEATREGEX.test(stripNum.replace(/\s/g, ""));
  const testCountry = country.length > 2 || country[0] !== "0";
  const testArea = +area > 900 || +area < 200;
  const localLeftSum = localLeft
    .split("")
    .reduce((prev, curr) => (prev += +curr), 0);
  const testLocalRight = localRight.includes(String(localLeftSum));

  return testCountry || testArea || testRepeat || testLocalRight;
}

assert.equal(isSpam("+0 (200) 234-0182"), false);
assert.equal(isSpam("+091 (555) 309-1922"), true);
assert.equal(isSpam("+1 (555) 435-4792"), true);
assert.equal(isSpam("+0 (955) 234-4364"), true);
assert.equal(isSpam("+0 (155) 131-6943"), true);
assert.equal(isSpam("+0 (555) 135-0192"), true);
assert.equal(isSpam("+0 (555) 564-1987"), true);
assert.equal(isSpam("+0 (555) 234-0182"), false);
