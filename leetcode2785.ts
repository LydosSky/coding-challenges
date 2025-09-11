import assert from "node:assert/strict";

/**
 * Given a 0-indexed string s, permute s to get a new t such that:
 *
 * - All consonants remain in their original places. More formally, if
 * there is an index i with 0 <= i < s.length such that s[i] is a consonant,
 * then t[i] = s[i];
 * - The vowels must be sorted in the nondecreasing order their ASCII values.
 * More formally, for pairs of indices i, j with 0 <= i < j < s.length such
 * that s[i] and s[j] are vowels, then t[i] must not have a higher ASCII value
 * than t[j]
 * */
function sortVowels(s: string): string {
  const VOWELS: RegExp = /[aeiou]/i;
  const vowelCodes: Array<number> = [];
  const newString: Array<string> = [];
  // Get vowels from the string
  for (let i = 0; i < s.length; i++) {
    if (VOWELS.test(s[i])) vowelCodes.push(s[i].charCodeAt(0));
  }
  // Sort strings from the vowel
  vowelCodes.sort((a, b) => a - b);

  let j = 0;
  for (let i = 0; i < s.length; i++) {
    if (VOWELS.test(s[i])) {
      newString[i] = String.fromCharCode(vowelCodes[j]);
      j++;
    } else {
      newString[i] = s[i];
    }
  }

  return newString.join("");
}

assert.equal(sortVowels("lEetcOde"), "lEOtcede");
assert.equal(sortVowels("lYmpH"), "lYmpH");
