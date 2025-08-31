import assert from "node:assert/strict";

/**
 * Given a string, remove all spaces from the string, insert two spaces between
 * every character, convert all alphabetical letters to uppercase, and return
 * the result.
 * - Non-alphabetical characters should remain unchanged (except for spaces).
 *
 * @param {string} sentence
 * @returns {string}
 */
function spaceJam(sentence) {
    return sentence
        .replace(/\s+/g, "")
        .toUpperCase()
        .split("")
        .reduce((prev, current) => {
            return `${prev}  ${current}`;
        }, "")
        .trim();
}

assert.equal(spaceJam("freeCodeCamp"), "F  R  E  E  C  O  D  E  C  A  M  P");
assert.equal(
    spaceJam("   free   Code   Camp   "),
    "F  R  E  E  C  O  D  E  C  A  M  P",
);
assert.equal(spaceJam("Hello World?!"), "H  E  L  L  O  W  O  R  L  D  ?  !");
assert.equal(spaceJam("C@t$ & D0g$"), "C  @  T  $  &  D  0  G  $");
assert.equal(spaceJam("allyourbase"), "A  L  L  Y  O  U  R  B  A  S  E");
