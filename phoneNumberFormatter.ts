import assert from "node:assert/strict";

/**
 * Given a string of eleven digits, return the string as a phone number
 * in this format "+D (DDD) DDD-DDDD"
 * */
function formatNumber(number: string): string {
  if (number.length !== 11) {
    return "";
  }
  return number.split("").reduce((prev, curr, index) => {
    if (index === 1) prev += " (";
    if (index === 4) prev += ") ";
    if (index === 7) prev += "-";

    return (prev += curr);
  }, "+");
}

assert.equal(formatNumber("05552340182"), "+0 (555) 234-0182");
assert.equal(formatNumber("15554354792"), "+1 (555) 435-4792");
assert.equal(formatNumber("115554354792"), "");
assert.equal(formatNumber("5554354792"), "");
