import assert from "assert/strict";

/**
 * Given a sentence string, return the longest word in the sentence.
 *   - Words are separated by a single space.
 *   - Only letters (a-z, case-insensitive) count toward the word's length.
 *   - If there are multiple words with the same length, return the first one
 *   that appears.
 *   - Return the word as it appears in the given string, with punctuation
 *   removed.
 * */
function longestWord(sentence) {
    return sentence
        .split(" ")
        .map((word) => word.replace(/[^\w\s]/g, ""))
        .reduce((prev, curr) => (curr.length > prev.length ? curr : prev), "");
}

assert.equal(longestWord("The quick red fox"), "quick");
assert.equal(longestWord("Hello coding challenge."), "challenge");
assert.equal(longestWord("Do Try This At Home."), "This");
assert.equal(
    longestWord(
        "This sentence... has commas, ellipses, and an exlamation point!",
    ),
    "exlamation",
);
assert.equal(longestWord("A tie? No way!"), "tie");
assert.equal(longestWord("Wouldn't you like to know."), "Wouldnt");
