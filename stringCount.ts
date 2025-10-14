import assert from "node:assert/strict";

/**
 * Given two strings, determine how many times the second string appears in the first.
 *
 * - The pattern string can overlap in the first string. For example, 'aaa' contains
 * 'aa' twice. The first two a's and the second two.
 * */
function count(text: string, pattern: string): number {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (text.slice(i, i + pattern.length) === pattern) count++;
  }
  return count;
}

assert.equal(count("abcdefg", "def"), 1);
assert.equal(count("hello", "world"), 0);
assert.equal(count("mississippi", "iss"), 2);
assert.equal(count("she sells seashells by the seashore", "sh"), 3);
assert.equal(count("101010101010101010101", "101"), 10);
