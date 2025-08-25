import assert from "node:assert";

/**
 * Given a secret message string, and an integer representing the
 * number of letters that were used to shift the message to encode
 * it, return the decoded string.
 * - A positive number means the message was shifted forward in
 *   the alphabet.
 * - A negative number means the message was shifted backward in
 *   the alphabet.
 * - Case matters, decoded characters should retain the case of
 *   their encoded counterparts
 * - Non-alphabetical characters should not get decoded.
 *
 * @param {string} message - the message
 * @param {number} shift - the shift
 * @returns {string} - decoded version of message
 * */
function decode(message, shift) {
  let decodedMessage = "";
  for (let i = 0; i < message.length; i++) {
    if (/[A-za-z]/.test(message[i]))
      decodedMessage += shiftChar(message[i], shift);
    else decodedMessage += message[i];
  }
  return decodedMessage;
}

assert.strictEqual(
  decode("Xlmw mw e wigvix qiwweki.", 4),
  "This is a secret message.",
);
assert.strictEqual(decode("Byffi Qilfx!", 20), "Hello World!");
assert.strictEqual(decode("Zqd xnt njzx?", -1), "Are you okay?");
assert.strictEqual(decode("oannLxmnLjvy", 9), "freeCodeCamp");

/**
 * Shift given characters in the amount of shiftChar
 * shift is circular
 * - A shifted -1 will be Z
 * - Z shifted 1 will be A
 * - a shifted -1 will be z
 * - z shifted 1 will be a
 *
 * @param {string} char - the char to shift
 * @param {number} shift - the number of letters to shift
 * @return {string} - the shifted character
 * */
function shiftChar(char, shift) {
  const charCode = char.charCodeAt();
  let shifted;

  if (charCode >= 65 && charCode <= 90) {
    shifted = ((((charCode - 65 - shift) % 26) + 26) % 26) + 65;
  }

  if (charCode >= 97 && charCode <= 122) {
    shifted = ((((charCode - 97 - shift) % 26) + 26) % 26) + 97;
  }

  return String.fromCharCode(shifted);
}
assert.strictEqual(shiftChar("A", 1), "Z");
assert.strictEqual(shiftChar("Z", -1), "A");
assert.strictEqual(shiftChar("z", -1), "a");
assert.strictEqual(shiftChar("a", 1), "z");
