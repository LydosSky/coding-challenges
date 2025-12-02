import assert from "assert/strict";

/**
 * Given a string in camel case, returns the snake case version of the string using
 * following rules.
 *
 *  - The input string will contain only letters(A-Z and a-z) and will
 *  always start with a lowercase letter.
 *  - Every uppercase letter in the camel case string starts a new word.
 *  - Convert all letters to lowercase.
 *  - Separate words with an underscore(_).
 *
 *  @param {string} camel
 *  @returns {string}
 * */
function toSnake(camel) {
    const words = [];
    let left = 0;
    let right = 0;
    while (right < camel.length) {
        const letter = camel[right].charCodeAt();
        if (letter >= 65 && letter <= 90) {
            words.push(camel.slice(left, right));
            left = right;
        }
        right++;
    }
    words.push(camel.slice(left, right));

    return words.map((w) => w.toLowerCase()).join("_");
}

assert.equal(toSnake("helloWorld"), "hello_world");
assert.equal(toSnake("myVariableName"), "my_variable_name");
assert.equal(
    toSnake("freecodecampDailyChallenges"),
    "freecodecamp_daily_challenges",
);
