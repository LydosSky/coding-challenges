import assert from "node:assert/strict";

/**
 * Given a string, return 'digits' if the string has more digits than, letters
 * 'letters' if it has more letters than digits, and 'tie' if it has the same
 * amount of digits and letters.
 * */
function digitsOrLetters(str: string): string {
  let numDigit = 0;
  let numLetter = 0;
  return str.split("").reduce((prev, curr) => {
    if (/[0-9]/.test(curr)) numDigit++;
    if (/[A-Za-z]/.test(curr)) numLetter++;
    return numDigit > numLetter
      ? "digits"
      : numDigit < numLetter
        ? "letters"
        : "tie";
  }, "tie");
}

assert.equal(digitsOrLetters("abc123"), "tie");
assert.equal(digitsOrLetters("a1b2c3d"), "letters");
assert.equal(digitsOrLetters("1a2b3c4"), "digits");
assert.equal(digitsOrLetters("abc123!@#DEF"), "letters");
assert.equal(digitsOrLetters("H3110 W0R1D"), "digits");
assert.equal(digitsOrLetters("P455W0RD"), "tie");
