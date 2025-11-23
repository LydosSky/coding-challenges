import assert from "assert/strict";

/**
 *  Given a sentence string, return an arrau with a count of each character in alpha
 *  betical order.
 *
 *    - Treat upper and lowercase letters as the same letter when counting.
 *    - Ignore numbers, spaces, puntuation, etc.
 *    - Return the count and letter in the format 'letter count'.
 *    - All returned letters should be lowercase.
 *    - Do not return a count of letters that are not in the given string.
 * */
function countCharacters(sentence) {
    const dict = {};
    for (let char of sentence.toLowerCase()) {
        if (/[a-z]/.test(char))
            if (dict[char]) dict[char] += 1;
            else dict[char] = 1;
    }
    return Object.keys(dict)
        .sort()
        .map((key) => `${key} ${dict[key]}`);
}

assert.deepEqual(countCharacters("hello world"), [
    "d 1",
    "e 1",
    "h 1",
    "l 3",
    "o 2",
    "r 1",
    "w 1",
]);
assert.deepEqual(countCharacters("I love coding challenges!"), [
    "a 1",
    "c 2",
    "d 1",
    "e 3",
    "g 2",
    "h 1",
    "i 2",
    "l 3",
    "n 2",
    "o 2",
    "s 1",
    "v 1",
]);
assert.deepEqual(countCharacters("// TODO: Complete this challenge ASAP!"), [
    "a 3",
    "c 2",
    "d 1",
    "e 4",
    "g 1",
    "h 2",
    "i 1",
    "l 3",
    "m 1",
    "n 1",
    "o 3",
    "p 2",
    "s 2",
    "t 3",
]);
