import assert from "node:assert/strict";

/**
 * Given a paragraph, return a new paragraph where the first letter of each sentence is
 * capitalized.
 * - All other characters should be preserved.
 * - Sentences can end with a period, one or more question marks, or one or more exclamation
 * points.
 * */
function capitalize(paragraph: string): string {
  const regex = /[\.?!]/;
  const chars = paragraph.split("");
  let firstLetter = true;
  for (let i = 0; i < chars.length; i++) {
    if (firstLetter && chars[i] !== " ") {
      chars[i] = chars[i].toUpperCase();
      firstLetter = false;
    } else if (regex.test(chars[i])) {
      firstLetter = true;
    } else continue;
  }
  return chars.join("");
}

assert.equal(
  capitalize("this is a simple sentence."),
  "This is a simple sentence.",
);
assert.equal(
  capitalize("hello world. how are you?"),
  "Hello world. How are you?",
);
assert.equal(
  capitalize("i did today's coding challenge... it was fun!!"),
  "I did today's coding challenge... It was fun!!",
);
assert.equal(
  capitalize("crazy!!!strange???unconventional...sentences."),
  "Crazy!!!Strange???Unconventional...Sentences.",
);
assert.equal(
  capitalize(
    "there's a space before this period . why is there a space before that period ?",
  ),
  "There's a space before this period . Why is there a space before that period ?",
);
