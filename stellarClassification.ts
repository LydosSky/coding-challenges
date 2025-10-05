import assert from "node:assert/strict";

/**
 * Given the surface temperature of a start in Kelvin (K) returns its stellar
 * classification based on following ranges:
 * - "O": 30000 K or higher
 * - "B": 10000 K - 29999 K
 * - "A": 7500  K - 9999  K
 * - "F": 6000  K - 7499  K
 * - "G": 5200  K - 5999  K
 * - "K": 3700  K - 5199  K
 * - "M": 0     K - 3699  K
 * */
function classification(temp: number): string {
  switch (true) {
    case temp >= 30000:
      return "O";
    case temp >= 10000:
      return "B";
    case temp >= 7500:
      return "A";
    case temp >= 6000:
      return "F";
    case temp >= 5200:
      return "G";
    case temp >= 3700:
      return "K";
    case temp >= 0:
      return "M";
    default:
      return "Not Classified";
  }
}

assert.equal(classification(5778), "G");
assert.equal(classification(2400), "M");
assert.equal(classification(9999), "A");
assert.equal(classification(3700), "K");
assert.equal(classification(3699), "M");
assert.equal(classification(210000), "O");
assert.equal(classification(6000), "F");
assert.equal(classification(11432), "B");
assert.equal(classification(-1), "Not Classified");
