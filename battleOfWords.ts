import assert from "node:assert/strict";

/**
 * Given two sentences representing your team and an opposing theam, where
 * each word from your team battles the corresponding word from the opposing
 * team, determine which team wins using the following rules:
 *
 * - The given sentences will always contain the same number of words.
 * - Words are separated by a single space and will only contain letters.
 * - The value of each word is the sum of its letters.
 * - Letters a to z correspond to the values 1 throught 26.
 * - A capital letter doubles the value of the letter.
 * - Words battle in order: first word of your team vs first word of the opposing
 * team.
 * - A word wins if its value is greater than the opposing word's value.
 * - The team with more winning words is the winner.
 * */
function battle(allies: string, axis: string): string {
  function scoreOfWord(word: string): number {
    return word
      .split("")
      .reduce((prev, curr) => (prev += scoreOfLetter(curr)), 0);
  }

  function scoreOfLetter(letter: string): number {
    const charCode = letter.charCodeAt(0);
    return charCode >= 97 && charCode <= 122
      ? charCode - 96
      : charCode >= 65 && charCode <= 90
        ? (charCode - 64) * 2
        : 0;
  }

  const alliesWords = allies.split(" ");
  const axisWords = axis.split(" ");
  let alliesScore = 0;
  let axisScore = 0;
  for (let i = 0; i < alliesWords.length; i++) {
    const alliesWordScore = scoreOfWord(alliesWords[i]);
    const axisWordScore = scoreOfWord(axisWords[i]);
    if (alliesWordScore > axisWordScore) alliesScore++;
    else if (axisWordScore > alliesWordScore) axisScore++;
  }

  return alliesScore > axisScore
    ? "We win"
    : alliesScore < axisScore
      ? "We lose"
      : "Draw";
}

assert.equal(battle("hello world", "hello word"), "We win");
assert.equal(battle("Hello world", "hello world"), "We win");
assert.equal(battle("lorem ipsum", "kitty ipsum"), "We lose");
assert.equal(battle("hello world", "world hello"), "Draw");
assert.equal(battle("git checkout", "git switch"), "We win");
assert.equal(
  battle("Cheeseburger with fries", "Cheeseburger with Fries"),
  "We lose",
);
assert.equal(battle("We must never surrender", "Our team must win"), "Draw");
