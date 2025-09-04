import assert from "node:assert/strict";

/**
 * Given a string, returns a new version of the string where each vowel
 * is duplicated one more time than the previous vowel you encountered.
 * For instance, the first vowel in the sentence should remain unchanged.
 * The second vowel should appear twice in a row. The third vowel should
 * appear three times in a row, and so on.
 *
 * - The letters a,e,i,o, and u, in either uppercase or lowercase, are
 * considered vowels.
 * - The original vowel should keep its case.
 * - Repeated vowels should be lowercase.
 * - All non-vowel characters should keep their original case.
 *
 * */

function repeatVowels(str) {
    const regex = /[aeiou]/i;
    let vowelCount = 0;
    return str
        .split("")
        .reduce(
            (prev, curr) =>
                regex.test(curr)
                    ? (prev += `${curr}`.padEnd(
                          ++vowelCount,
                          curr.toLowerCase(),
                      ))
                    : (prev += curr),
            "",
        );
}

assert.equal(repeatVowels("hello world"), "helloo wooorld");
assert.equal(repeatVowels("freeCodeCamp"), "freeeCooodeeeeCaaaaamp");
assert.equal(repeatVowels("AEIOU"), "AEeIiiOoooUuuuu");
assert.equal(
    repeatVowels("I like eating ice cream in Iceland"),
    "I liikeee eeeeaaaaatiiiiiing iiiiiiiceeeeeeee creeeeeeeeeaaaaaaaaaam iiiiiiiiiiin Iiiiiiiiiiiiceeeeeeeeeeeeelaaaaaaaaaaaaaand",
);
