import assert from "node:assert/strict";
import { symlinkSync } from "node:fs";

/**
 * Given a string representing a Roman numeral, returns its
 * integer value.
 * */
function parseRomanNumeral(numeral: string): number {
  const ValueTable: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  
  let total = 0;
  for (let i = 0; i < numeral.length; i++) {
      if ((numeral[i + 1]) && (ValueTable[numeral[i]] < ValueTable[numeral[i + 1]]))
        total -= ValueTable[numeral[i]];
      else total += ValueTable[numeral[i]];
  }

  return total;
}

assert.equal(parseRomanNumeral("III"), 3);
assert.equal(parseRomanNumeral("IV"), 4);
assert.equal(parseRomanNumeral("XXVI"), 26);
assert.equal(parseRomanNumeral("XCIX"), 99);
assert.equal(parseRomanNumeral("CDLX"), 460);
assert.equal(parseRomanNumeral("DIV"), 504);
assert.equal(parseRomanNumeral("MMXXV"), 2025);
