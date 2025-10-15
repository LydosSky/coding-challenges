import assert from "node:assert/strict";

/**
 * Given a string of HTML code, remove the tags and return the plain
 * text content.
 *
 * - The input string will contain only valid HTML.
 * - HTML tags may be nested.
 * - Remove the tags and any attributes.
 *
 * */
function stripTags(html: string): string {
  const stack = [];
  let htmlText = "";

  for (let i = 0; i < html.length; i++) {
    if (html[i] === "<") stack.push(html[i]);
    if (stack.length === 0) htmlText += html[i];
    if (html[i] === ">") stack.pop();
  }

  return htmlText;
}

assert.equal(stripTags('<a href="#">Click here</a>'), "Click here");
assert.equal(
  stripTags('<p class="center">Hello <b>World</b>!</p>'),
  "Hello World!",
);
assert.equal(stripTags('<img src="cat.jpg" alt="Cat">'), "");
assert.equal(
  stripTags(
    '<main id="main"><section class="section">section</section><section class="section">section</section></main>',
  ),
  "sectionsection",
);
