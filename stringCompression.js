import assert from "assert/strict";

/**
 * Given a string sentence, return a compressed version of the sentence where
 * consecutive duplicate words are replaced by the word followed with the number
 * of times it repeats in parentheses.
 *
 *   - Only consecutive duplicates are compressed.
 *   - Words are separated by single spaces.
 * */
function compressString(sentence) {
    const words = sentence.split(" ");
    const compressed = [];
    let current_word = words[0];
    let count = 1;
    for (let i = 1; i < words.length; i++) {
        if (current_word == words[i]) count += 1;
        else {
            if (count > 1) compressed.push(`${current_word}(${count})`);
            else compressed.push(current_word);
            current_word = words[i];
            count = 1;
        }
    }

    if (count > 1) compressed.push(`${current_word}(${count})`);
    else compressed.push(current_word);

    return compressed.join(" ");
}

assert.equal(compressString("yes yes yes please"), "yes(3) please");
assert.equal(compressString("I have have have apples"), "I have(3) apples");
assert.equal(
    compressString("one one three and to the the the the"),
    "one(2) three and to the(4)",
);
assert.equal(
    compressString(
        "route route route route route route tee tee tee tee tee tee",
    ),
    "route(6) tee(6)",
);
