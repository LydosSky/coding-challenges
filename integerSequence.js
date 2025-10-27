import assert from "node:assert/strict";

/**
 * Given a positive integer, return a string with all of the integers from 1
 * up to, and including, the given number, in numerical order.
 *
 * */
function sequence(n) {
    if (n === 1) return `${n}`;
    return sequence(n - 1) + n;
}

assert.equal(sequence(5), "12345");
assert.equal(sequence(10), "12345678910");
assert.equal(sequence(1), "1");
assert.equal(sequence(27), "123456789101112131415161718192021222324252627");
