import assert from "assert/strict";

/**
 * Given two strings of the same length, a secret word and a guess,
 * compare the guess to the secret word using the following rules:
 *   - The secret word and guess will only consist of uppercase
 *   letters('A' to 'Z').
 *   - For each letter in the guess, replace it with a number
 *   according to how it matches the secret word
 *       - '2' if the letter is in the secret word and in the correct position.
 *       - '1' if the letter is in the secret word but in the wrong position.
 *       - '0' if the letter is not in the secret word.
 *   - Each letter in the secret word can be used at most once.
 *   - Exact matches ("2") are assigned first, then partial matches ("1") are
 *   assigned from left to right for remaining letters.
 *   - If a letter occurs multiple times in the guess, it can only match
 *   as many times as it appears in the secret word.
 *
 *   @param {string} word
 *   @param {string} guess
 *   @returns {number}
 */
function compare(word, guess) {
    const length = word.length;
    const matches = new Array(length).fill("0");
    const used = new Array(length).fill(false);

    for (let i = 0; i < length; i++) {
        if (word[i] === guess[i]) {
            matches[i] = "2";
            used[i] = true;
        }
    }

    for (let i = 0; i < length; i++) {
        if (matches[i] === "2") continue;

        for (let j = 0; j < length; j++) {
            if (!used[j] & (guess[i] === word[j])) {
                matches[i] = "1";
                used[j] = true;
                break;
            }
        }
    }

    return matches.join("");
}

assert.equal(compare("APPLE", "POPPA"), "10201");
assert.equal(compare("REACT", "TRACE"), "11221");
assert.equal(compare("DEBUGS", "PYTHON"), "000000");
assert.equal(compare("JAVASCRIPT", "TYPESCRIPT"), "0000222222");
assert.equal(compare("ORANGE", "ROUNDS"), "110200");
assert.equal(compare("WIRELESS", "ETHERNET"), "10021000");
