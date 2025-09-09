import assert from "node:assert/strict";

/**
 * Given a string, determine if all the characters in the string are unique.
 *
 * - Uppercase and lowercase letters should be considered different characters.
 * */
function allUnique(str: string): boolean {
  let check = "";
  return str.split("").reduce((prev, curr) => {
    if (check.includes(curr)) return false && prev;
    else {
      check += curr;
      return prev;
    }
  }, true);
}

assert.equal(allUnique("abc"), true);
assert.equal(allUnique("aA"), true);
assert.equal(allUnique("QwErTy123!@"), true);
assert.equal(allUnique("~!@#$%^&*()_+"), true);
assert.equal(allUnique("hello"), false);
assert.equal(allUnique("freeCodeCamp"), false);
assert.equal(allUnique("!@#*$%^&*()aA"), false);
