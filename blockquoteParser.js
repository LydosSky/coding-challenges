import assert from "assert/strict";

/**
 *  Given a string that includes a blockquote in Markdwon, return the equivalent
 *  HTML string.
 *
 * @param {string} markdown
 * @returns {string}
 * */
function parseBlockquote(markdown) {
    return markdown.replace(/^(\s*>\s*)(.*)$/g, "<blockquote>$2</blockquote>");
}

assert.equal(
    parseBlockquote("> This is a quote"),
    "<blockquote>This is a quote</blockquote>",
);
assert.equal(
    parseBlockquote(" > This is also a quote"),
    "<blockquote>This is also a quote</blockquote>",
);
assert.equal(
    parseBlockquote("  >    So  Is  This"),
    "<blockquote>So  Is  This</blockquote>",
);
