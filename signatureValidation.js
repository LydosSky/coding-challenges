import assert from "node:assert/strict";

/**
 * Given a message string, a secret key string, and a signature number, determine
 * if the signa is valid usin this encoding method:
 *   - Letters in the message and secret key have these values:
 *     - a to z have values 1 to 26 respectively.
 *     - A to Z have values 27 to 52 respectively.
 *
 *   - All other characters have no value.
 *   - Compute the signature by taking the sum of the message plus the sum of the
 *   secret key.
 * */
function verify(message, key, signature) {
  function valueOfLetter(letter) {
    const value = letter.charCodeAt();

    return value > 96 && value < 123
      ? value - 96
      : value > 64 && value < 91
        ? value - 38
        : 0;
  }

  const messageVal = message
    .split("")
    .reduce((previous, current) => (previous += valueOfLetter(current)), 0);
  const keyVal = key
    .split("")
    .reduce((previous, current) => (previous += valueOfLetter(current)), 0);

  return messageVal + keyVal === signature;
}

assert.equal(verify("foo", "bar", 57), true);
assert.equal(verify("foo", "bar", 54), false);
assert.equal(verify("freeCodeCamp", "Rocks", 238), true);
assert.equal(verify("Is this valid?", "No", 210), false);
assert.equal(verify("Is this valid?", "Yes", 233), true);
assert.equal(
  verify("Check out the freeCodeCamp podcast,", "in the mobile app", 514),
  true,
);
