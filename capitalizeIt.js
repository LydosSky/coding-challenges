import assert from "assert/strict";

/**
 * Given a string title, returns a new string formatted in the title case using
 * the following rules
 *
 *   - Capitalize the first letter of each word.
 *   - Make all other letters in each word lowercase.
 *   - Words are always separated by single space.
 *
 *  @param {string} title
 *  @returns {string}
 * */
function titleCase(title) {
    function capitalize(word) {
        return word
            .toLowerCase()
            .split("")
            .map((l, idx) => (idx === 0 ? l.toUpperCase() : l))
            .join("");
    }

    return title
        .split(" ")
        .map((word) => capitalize(word))
        .join(" ");
}

assert.equal(titleCase("hello world"), "Hello World");
assert.equal(titleCase("the quick brown fox"), "The Quick Brown Fox");
assert.equal(titleCase("JAVASCRIPT AND PYTHON"), "Javascript And Python");
assert.equal(
    titleCase("AvOcAdO tOAst fOr brEAkfAst"),
    "Avocado Toast For Breakfast",
);
