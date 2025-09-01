import assert from "node:assert/strict";

/**
 * Given a string, return a jumbled version of that string where each word is
 * transformed using the following constraints:
 *
 * - The first and last letters of the words remain in place
 * - All letters between the first and last letter are sorted
 * alphabetically.
 * - The input strings will contain no punctuation, and will be
 * entirely lowercase.
 *
 * @param {string} text
 * @returns {string}
 * */
function jbelmu(text) {
  const words = text.split(" ");
  return words
    .map((word) => {
      if (word.length <= 2) return word;

      const firstC = word[0];
      const lastC = word[word.length - 1];
      return word
        .split("")
        .slice(1, word.length - 1)
        .sort()
        .reduce(
          (prev, curr, idx) =>
            idx === word.length - 3
              ? `${prev}${curr}${lastC}`
              : `${prev}${curr}`,
          `${firstC}`
        );
    })
    .join(" ");
}

assert.equal(jbelmu("hello world"), "hello wlord");
assert.equal(jbelmu("i love jumbled text"), "i love jbelmud text");
assert.equal(
  jbelmu("freecodecamp is my favorite place to learn to code"),
  "faccdeeemorp is my faiortve pacle to laern to cdoe"
);
assert.equal(
  jbelmu("the quick brown fox jumps over the lazy dog"),
  "the qciuk borwn fox jmpus oevr the lazy dog"
);
