import assert from "node:assert/strict";

/**
 * Given a sentence, return the longest word in the sentence.
 * - Ignore periods(.) when determining word length.
 * - If multiple words are ties for the longest, return the first one that occurs.
 * */
function getLongestWord(sentence: string): string {
  return sentence
    .replace(".", "")
    .split(" ")
    .reduce((prev, curr) => (curr.length > prev.length ? curr : prev), "");
}

assert.equal(getLongestWord("coding is fun"), "coding");
assert.equal(
  getLongestWord("Coding challenges are fun and educational."),
  "educational",
);
assert.equal(
  getLongestWord("This sentence has multiple long words."),
  "sentence",
);
