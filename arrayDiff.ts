import assert from "node:assert/strict";

/**
 * Given two arrays with strings values, return a new array containing
 * all the values that appear in only one of the arrays.
 * - The returned arrays should be sorted in alphabetical order.
 * */
function arrayDiff(arr1: Array<string>, arr2: Array<string>): Array<string> {
  const newArr: Array<string> = [];
  const set: Set<string> = new Set([...arr1, ...arr2]);

  for (const word of set) {
    if (arr1.includes(word) && arr2.includes(word)) continue;
    else newArr.push(word);
  }

  return newArr.sort((a, b) => a.localeCompare(b));
}

assert.deepEqual(
  arrayDiff(["apple", "banana"], ["apple", "banana", "cherry"]),
  ["cherry"],
);
assert.deepEqual(
  arrayDiff(["apple", "banana", "cherry"], ["apple", "banana"]),
  ["cherry"],
);

assert.deepEqual(
  arrayDiff(["one", "two", "three", "four", "six"], ["one", "three", "eight"]),
  ["eight", "four", "six", "two"],
);

assert.deepEqual(
  arrayDiff(
    ["two", "four", "five", "eight"],
    ["one", "two", "three", "four", "seven", "eight"],
  ),
  ["five", "one", "seven", "three"],
);

assert.deepEqual(
  arrayDiff(["I", "like", "freeCodeCamp"], ["I", "like", "rocks"]),
  ["freeCodeCamp", "rocks"],
);
