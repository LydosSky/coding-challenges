import assert from "assert/strict";

/**
 * Given a string repressenting a Markdown heading, return the equivalent
 * HTML heading.
 *
 * A valid Markdown heading must:
 *   - Start with zero or more spaces, followed by
 *   - 1 to 6 hash characters (#) in a row, then
 *   - At least one space. And finally,
 *   - The heading text.
 */
function convert(heading) {
    const regex = /^\s*(#{1,6})\s+(.+)$/;
    if (!regex.test(heading)) return "Invalid format";
    const [full, level, content] = regex.exec(heading);
    return `<h${level.length}>${content}</h${level.length}>`;
}

assert.equal(convert("My heading"), "Invalid format");
assert.equal(convert("#My heading"), "Invalid format");
assert.equal(convert("####### My level 7 heading"), "Invalid format");
assert.equal(convert("# My level 1 heading"), "<h1>My level 1 heading</h1>");
assert.equal(
    convert("##### My level 5 heading"),
    "<h5>My level 5 heading</h5>",
);
assert.equal(
    convert("  ###  My level 3 heading"),
    "<h3>My level 3 heading</h3>",
);
assert.equal(convert("## My #2 heading"), "<h2>My #2 heading</h2>");
