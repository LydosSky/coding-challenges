import assert from "assert/strict";

/**
 * Given a string, return an array with the number of vowels and number of
 * consonants in the string.
 *   - Vowels consist of a, e, i, o, u in any case.
 *   - Consonants consist of all other letters in any case.
 *   - Ignore any non-letter characters
 * For example, given 'Hello World', return [3, 7].
 * @param {string} str
 * @returns {string}
 * */
function count(str) {
    return str.split("").reduce(
        (prev, curr) => {
            let [vowels, consonants] = prev;
            if (/[aeiou]/i.test(curr)) vowels++;
            if (/[b-df-hj-np-tv-z]/i.test(curr)) consonants++;
            return [vowels, consonants];
        },
        [0, 0],
    );
}

assert.deepEqual(count("Hello World"), [3, 7]);
assert.deepEqual(count("JavaScript"), [3, 7]);
assert.deepEqual(count("Python"), [1, 5]);
assert.deepEqual(count("freeCodeCamp"), [5, 7]);
assert.deepEqual(count("Hello, World!"), [3, 7]);
assert.deepEqual(
    count("The quick brown fox jumps over the lazy dog."),
    [11, 24],
);
