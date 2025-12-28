import assert from "assert/strict";

/**
 * Given a string of an image in Markdown, return the equivalent HTML string.
 *
 * @param {string} markdown
 * @returns {string}
 * */
function parseImage(markdown) {
    return markdown.replace(/^!\[(.*?)\]\((.*?)\)$/, '<img src="$2" alt="$1">');
}

assert.equal(
    parseImage("![Cute cat](cat.png)"),
    '<img src="cat.png" alt="Cute cat">',
);
assert.equal(
    parseImage("![Rocket Ship](https://freecodecamp.org/cdn/rocket-ship.jpg)"),
    '<img src="https://freecodecamp.org/cdn/rocket-ship.jpg" alt="Rocket Ship">',
);

assert.equal(
    parseImage("![Cute cats!](https://freecodecamp.org/cats.jpeg)"),
    '<img src="https://freecodecamp.org/cats.jpeg" alt="Cute cats!">',
);
