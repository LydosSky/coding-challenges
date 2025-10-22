import assert from "node:assert/strict";

/**
 * Given a sentance, return a version of it that sounds like advice from a wise
 * teacher using the following rules:
 *
 *   - Words are separated by a single space.
 *   - Find the first occurrence of one of the following words in the sentence:
 *   'have', 'must', 'are', 'will', 'can'.
 *   - Move all words before and including that word to the end of the sentence
 *   and:
 *     - Preserve the order of the words when you move them.
 *     - Make them all lowercase.
 *     - And add a comma and space before them.
 *   - Capitalize the first letter of the new first word of the sentence.
 *   - All given sentences will end with a single puctuation mark. Keep the
 *   original punctuation of the sentence and move it to the end of the new
 *   sentence.
 *   - Return the new sentence, ,make sure there's space between each word and
 *   no spaces at the beginning or end of the sentence.
 *
 *   @param {string} sentence
 *   @returns {string}
 * */
function wiseSpeak(sentence) {
    const punctuation = sentence[sentence.length - 1];
    const wordsToFind = {
        have: -1,
        must: -1,
        are: -1,
        will: -1,
        can: -1,
    };

    Object.keys(wordsToFind).forEach(
        (key) => (wordsToFind[key] = sentence.indexOf(key)),
    );

    const [word, indexOfWord] = Object.keys(wordsToFind).reduce(
        (prev, curr) =>
            wordsToFind[curr] < prev[1] && wordsToFind[curr] > 0
                ? [curr, wordsToFind[curr]]
                : prev,
        [null, Infinity],
    );

    const firstPart = `${sentence
        .slice(indexOfWord + word.length)
        .trim()
        .replace(punctuation, "")}`;
    const secondPart = `${sentence
        .slice(0, indexOfWord + word.length)
        .trim()
        .toLowerCase()}${punctuation}`;

    return `${firstPart[0].toUpperCase()}${firstPart.slice(1)}, ${secondPart}`;
}

assert.equal(wiseSpeak("You must speak wisely."), "Speak wisely, you must.");
assert.equal(wiseSpeak("You can do it!"), "Do it, you can!");
assert.equal(
    wiseSpeak("Do you think you will complete this?"),
    "Complete this, do you think you will?",
);
assert.equal(
    wiseSpeak("All your base are belong to us."),
    "Belong to us, all your base are.",
);
assert.equal(wiseSpeak("You have much to learn."), "Much to learn, you have.");
