import assert from "node:assert/strict";

/**
 * Given a string containing one or more words, return an acronym of
 * the words using the following constraints:
 *
 * - The acronym should consist of the first letter of each word
 * capitalized, unless otherwise noted.
 * - The acronym should ignore the first letter of these words
 * unless they are the first word of the given string: a, for, an,
 * and, by, and of.
 * - The acronym letters should be returned in order they are given.
 * - The acronym should not contain any spaces.
 * */
function buildAcronym(str: string): string {
  return str.split(" ").reduce((prev, curr) => {
    if (
      curr === "a" ||
      curr === "for" ||
      curr === "an" ||
      curr === "and" ||
      curr === "by" ||
      curr === "of"
    )
      return prev;
    else return (prev += curr.toUpperCase()[0]);
  }, "");
}

assert.equal(buildAcronym("Search Engine Optimization"), "SEO");
assert.equal(buildAcronym("Frequently Asked Questions"), "FAQ");
assert.equal(
  buildAcronym("National Aeronautics and Space Administration"),
  "NASA",
);
assert.equal(buildAcronym("Federal Bureau of Investigation"), "FBI");
assert.equal(buildAcronym("For your information"), "FYI");
assert.equal(buildAcronym("By the way"), "BTW");
assert.equal(
  buildAcronym(
    "An unstoppable herd of waddling penguins overtakes the icy mountains and sings happily",
  ),
  "AUHWPOTIMSH",
);
