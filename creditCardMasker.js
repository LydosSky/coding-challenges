import assert from "node:assert/strict";

/**
 * Given a string of credit card numbers, return a masked version of it using the
 * following constraints:
 * - The string will contain four sets of four digits(0-9), with all sets being
 * separated by a single space, or a single hypen(-).
 * - Replace all numbers, except the last four, with an asterisk(*).
 * - Leave the remaining characters unchanged.
 * */

function mask(cardNumber) {
    return cardNumber.replace(
        /\b\d{4}([- ])\d{4}\1\d{4}\1(\d{4})\b/g,
        "****$1****$1****$1$2",
    );
}

assert.equal(mask("4012-8888-8888-1881"), "****-****-****-1881");
assert.equal(mask("5105 1051 0510 5100"), "**** **** **** 5100");
assert.equal(mask("6011 1111 1111 1117"), "**** **** **** 1117");
assert.equal(mask("2223-0000-4845-0010"), "****-****-****-0010");
