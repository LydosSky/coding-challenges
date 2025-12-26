import assert from "assert/strict";

/**
 * Given a string and a target number, determine whether the string contains
 * exactly the target number of consonants.
 *
 * @param {string} text
 * @param {number} target
 *
 * @return {boolean}
 * */
function hasConsonantCount(text, target) {
    const count = text
        .split("")
        .reduce(
            (prev, curr) => (/(?![aeiou])[a-z]/i.test(curr) ? prev + 1 : prev),
            0,
        );
    return count === target;
}

assert.equal(hasConsonantCount("helloworld", 7), true);
assert.equal(hasConsonantCount("eieio", 5), false);
assert.equal(hasConsonantCount("freeCodeCamp Rocks!", 11), true);
assert.equal(
    hasConsonantCount("Th3 Qu!ck Br0wn F0x Jump5 0ver Th3 L@zy D0g.", 24),
    false,
);
assert.equal(
    hasConsonantCount("Th3 Qu!ck Br0wn F0x Jump5 0ver Th3 L@zy D0g.", 23),
    true,
);
