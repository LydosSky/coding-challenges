import assert from "node:assert/strict";

/**
 * Given a sentence string, return the number of words that are in the sentence.
 *
 *   - Words are any sequence of non-space characters and are separated by a single
 *   space.
 *
 * */
function countWords(sentence) {
    return sentence.split(" ").length;
}

assert.equal(countWords("Hello world"), 2);
assert.equal(countWords("The quick brown fox jumps over the lazy dog."), 9);
assert.equal(countWords("I like coding challenges!"), 4);
assert.equal(countWords("Complete the challenge in JavaScript and Python."), 7);
assert.equal(
    countWords("The missing semi-colon crashed the entire internet"),
    7,
);
