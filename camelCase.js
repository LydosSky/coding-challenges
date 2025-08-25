import assert from "node:assert";

/**
 * Given a string ,return its camel case version using the following
 * rules:
 * - Words in the string argument are separated by one or more characters
 *   from the following set: space (" "), dash ("-"), or underscore ("_").
 *   Treat any sequence of these as a word break.
 * - The first word should be all lowercase
 * - Each subsequent word should start with an uppercase letter, with
 *   the rest of it lowercase.
 * - All spaces and separators should be removed.
 *
 * @param {string} - the sentenced to turn camelCase
 * @return {string} - the camelCased word
 * */
function toCamelCase(s) {
  let camelCased = "";
  let wordBreak = false;

  for (let i = 0; i < s.length; i++) {
    if (i !== 0 && (s[i] === " " || s[i] === "-" || s[i] === "_")) {
      wordBreak = true;
      continue;
    }
    if (wordBreak) {
      camelCased += s[i].toUpperCase();
      wordBreak = false;
    } else {
      camelCased += s[i].toLowerCase();
    }
  }
  return camelCased;
}

assert.strictEqual(toCamelCase("HELLO WORLD"), "helloWorld");
assert.strictEqual(toCamelCase("hello world"), "helloWorld");
assert.strictEqual(toCamelCase("secret agent-X"), "secretAgentX");
assert.strictEqual(toCamelCase("FREE cODE cAMP"), "freeCodeCamp");
assert.strictEqual(
  toCamelCase(
    "ye old-_-sea  faring_buccaneer_-_with a - peg__leg----and a_parrot_ _named- _squawk",
  ),
  "yeOldSeaFaringBuccaneerWithAPegLegAndAParrotNamedSquawk",
);
