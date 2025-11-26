import assert from "assert/strict";

/**
 * Given a message string and a validation string, determine if the message is
 * valid
 *   - A message is valid if each word in the message starts with the
 *   corresponding letter in the validation string, in order.
 *   - Letters are case-insensitive.
 *   - Words in the message are separated by single spaces.
 *
 *   @param {string} message
 *   @param {string} validator
 *
 *   @returns {boolean}
 * */
function isValidMessage(message, validator) {
  const words = message.toLowerCase().split(" ");
  const letters = validator.toLowerCase();
  if (words.length > letters.length || words.length < letters.length)
    return false;
  return words.every((word, index) => word[0] === letters[index]);
}

assert.equal(isValidMessage("hello world", "hw"), true);
assert.equal(isValidMessage("ALL CAPITAL LETTERS", "acl"), true);
assert.equal(isValidMessage("Coding challenge are boring.", "cca"), false);
assert.equal(
  isValidMessage("The quick brown fox jumps over the lazy dog.", "TQBFJOTLD"),
  true
);
assert.equal(
  isValidMessage("The quick brown fox jumps over the lazy dog.", "TQBFJOTLDT"),
  false
);
