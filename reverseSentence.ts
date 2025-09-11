import assert from "node:assert/strict";

/**
 * Given a string of words, return a new string with the words in reverse order.
 * For example, the first word should be at the end of the returned string, and
 * the last word should be at the beginning of the returned string.
 *
 * - In the given string, words can be separated by one or more spaces.
 * - The returned string should only have one space between words.
 * */
function reverseSentence(sentence: string): string {
  return sentence.trim().replace(/ +/g, " ").split(" ").reverse().join(" ");
}

assert.equal(reverseSentence("world hello"), "hello world");
assert.equal(reverseSentence("push commit git"), "git commit push");
assert.equal(reverseSentence("npm install sudo"), "sudo install npm");
assert.equal(
  reverseSentence("import    default   function  export"),
  "export function default import",
);
