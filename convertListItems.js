import assert from "assert/strict";

/**
 *  Given a string representing an ordered list item in Markdown, return the equivalent
 *  HTML string.
 *
 *  A valid ordered list item in Markdown must:
 *
 *    - Start with zero or more spaces, followed by
 *    - A number (1 or greater) and a period (.) followed by
 *    - At least one space, and then
 *    - The list item text.
 *
 *  If the string doesn't have the exact format above, return 'Invalid format'. Otherwise,
 *  wrap the list item text in li tags and return the string.
 *
 *  @param {string} markdown
 *  @returns {string}
 * */
function convertListItem(markdown) {
    const REGEX = /^\s*\d+\.\s+(.+)/;
    if (!REGEX.test(markdown)) return "Invalid format";
    return `<li>${markdown.match(REGEX)[1]}</li>`;
}

assert.equal(convertListItem("1. My item"), "<li>My item</li>");
assert.equal(convertListItem(" 1.  Another item"), "<li>Another item</li>");
assert.equal(convertListItem("1 . invalid item"), "Invalid format");
assert.equal(convertListItem("2. list item text"), "<li>list item text</li>");
assert.equal(convertListItem(". invalid again"), "Invalid format");
assert.equal(convertListItem("A. last invalid"), "Invalid format");
