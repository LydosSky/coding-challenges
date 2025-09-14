import assert from "node:assert/strict";

/**
 * Given a paragraph, return an array of the three most frequently occuring
 * words.
 * - Words in the paragraph will be separated by spaces.
 * - Ignore case in the given paragraph.
 * - Ignore punctuation in the given paragraph.
 * - The returned array should have all lowercase words.
 * - The returned array should be in descending order with the
 * mose frequently occuring word first.
 * */

function getWords(paragraph: string): Array<string> {
  const wordMap: { [key: string]: number } = {};
  paragraph
    .toLowerCase()
    .replace(/[.!,]/g, "")
    .split(" ")
    .forEach((word) =>
      wordMap[word] === undefined ? (wordMap[word] = 1) : wordMap[word]++,
    );
  return Object.entries(wordMap)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3)
    .map(([word]) => word);
}

assert.deepEqual(
  getWords(
    "Coding in Python is fun because coding Python allows for coding in Python easily while coding",
  ),
  ["coding", "python", "in"],
);

assert.deepEqual(getWords("I like coding. I like testing. I love debugging!"), [
  "i",
  "like",
  "coding",
]);

assert.deepEqual(
  getWords(
    "Debug, test, deploy. Debug, debug, test, deploy. Debug, test, test, deploy!",
  ),
  ["debug", "test", "deploy"],
);
