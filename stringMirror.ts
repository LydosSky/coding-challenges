import assert from "node:assert/strict";

/**
 * Given two strings, determine if the second string is a mirror
 * of the first.
 *
 * - A string is considered a mirror if it contains the same letters
 * in reverse order.
 * - Treat uppercase and lowercase letters as distinct
 * - Ignore all non-alphabetical characters.
 * */
function isMirror(str1: string, str2: string): boolean {
  const REGEX = /[^a-zA-Z]/g;
  const cleanStr1 = str1.replace(REGEX, "");
  const cleanStr2 = str2.replace(REGEX, "");
  if (cleanStr1.length !== cleanStr2.length) return false;
  let leftptr = 0;
  let rightptr = cleanStr1.length - 1;
  while (leftptr < cleanStr1.length)
    if (cleanStr1[leftptr++] !== cleanStr2[rightptr--]) return false;
  return true;
}

assert.equal(isMirror("helloworld", "helloworld"), false);
assert.equal(isMirror("Hello World", "dlroW olleH"), true);
assert.equal(isMirror("RaceCar", "raCecaR"), true);
assert.equal(isMirror("RaceCar", "RaceCar"), false);
assert.equal(isMirror("Mirror", "rorrim"), false);
assert.equal(isMirror("Hello World", "dlroW-olleH"), true);
assert.equal(isMirror("Hello World", "!dlroW !olleH"), true);
