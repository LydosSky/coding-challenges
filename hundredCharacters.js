import assert from "node:assert/strict";

/**
 * Given a string, repeat its characters until the result is exactly 100
 * characters long. If you repetitions go over 100 characters, trim the
 * extra so it's exactly 100.
 * */
function oneHundred(chars) {
    let newStr = "";
    while (newStr.length < 100) newStr += chars;

    return newStr.slice(0, 100);
}

assert.equal(
    oneHundred("One hundred "),
    "One hundred One hundred One hundred One hundred One hundred One hundred One hundred One hundred One ",
);
assert.equal(
    oneHundred("freeCodeCamp "),
    "freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeC",
);
assert.equal(
    oneHundred("daily challenges "),
    "daily challenges daily challenges daily challenges daily challenges daily challenges daily challenge",
);

assert.equal(
    oneHundred("!"),
    "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
);
