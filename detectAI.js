import assert from "assert/strict";

/**
 * Given a string of one or more sentences, determine if it was likely generated
 * by AI using the following rules:
 *
 *   - It contains two or more dashes (-).
 *   - It contains two or more sets of parenthesis (()).Text can be within the
 *   parenthesis.
 *   - It contains three or more words with 7 or more letters.
 *   - Words are separated by a single space and only consist of letters (A-Z).
 *   Don't include punctuation or other non-letters as part of a word.
 *
 *  @param {string} word
 *  @returns {string}
 */
function detectAI(text) {
    let dashCount = 0;
    let parenCount = 0;
    const stack = [];
    for (let i = 0; i < text.length; i++) {
        if (text[i] == "-") dashCount++;
        if (text[i] == "(") stack.push(text[i]);
        if (text[i] == ")") {
            stack.pop(text[i]);
            parenCount++;
        }
    }
    const wordLength = text
        .split(" ")
        .map((word) => word.length)
        .filter((word) => word >= 7);

    const words = text.split(" ").filter((word) => !/[^A-Za-z]/.test(word));

    if (
        wordLength.length > 2 ||
        parenCount > 1 ||
        dashCount > 1 ||
        words.length == 0
    )
        return "AI";
    return "Human";
}

assert.equal(
    detectAI("The quick brown fox jumped over the lazy dog."),
    "Human",
);

assert.equal(
    detectAI("The hypersonic brown fox - jumped (over) the lazy dog."),
    "Human",
);

assert.equal(
    detectAI("Yes - you're right! I made a mistake there - let me try again."),
    "AI",
);

assert.equal(
    detectAI("The extraordinary students were studying vivaciously."),
    "AI",
);
assert.equal(
    detectAI("The (excited) student was (coding) in the library."),
    "AI",
);
