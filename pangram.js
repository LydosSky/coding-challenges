import assert from "node:assert/strict";

/**
 * Given a word or sentence and a string of lowercase letters, determine
 * if the word or sentence uses all the letters from the given set at
 * least once and no other letters.
 *
 * - Ignore non-alphabetical characters in the word or sentence.
 * - Ignore letter casing in the word or sentence.
 *
 * @param {string} sentence
 * @param {string} letters
 * @returns {boolean}
 * */
function isPangram(sentence, letters) {
    return (
        sentence
            .toLowerCase()
            .replace(/[^A-Za-z]+/g, "")
            .split("")
            .reduce((prev, curr) => prev && letters.includes(curr), true) &&
        letters
            .split("")
            .reduce(
                (prev, curr) => prev && sentence.toLowerCase().includes(curr),
                true,
            )
    );
}

assert.equal(isPangram("hello", "helo"), true);
assert.equal(isPangram("hello", "hel"), false);
assert.equal(isPangram("hello", "helow"), false);
assert.equal(isPangram("hello world", "helowrd"), true);
assert.equal(isPangram("Hello World!", "helowrd"), true);
assert.equal(isPangram("Hello World!", "heliowrd"), false);
assert.equal(isPangram("freeCodeCamp", "frcdmp"), false);
assert.equal(
    isPangram(
        "The quick brown fox jumps over the lazy dog.",
        "abcdefghijklmnopqrstuvwxyz",
    ),
    true,
);
