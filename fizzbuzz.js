import assert from "assert/strict";

/**
 *  Given an integer (n), return an array of integers from 1 to n(inclusive),
 *  replacing numbers that are multiple of:
 *    - 3 with "Fizz"
 *    - 5 with "Buzz"
 *    - 3 and 5 with "FizzBuzz"
 *
 *  @param {number} n
 * */
function fizzBuzz(n) {
    const array = [];

    for (let i = 0; i < n; i++) {
        let number = i + 1;
        if (number % 3 === 0 && number % 5 === 0) array.push("FizzBuzz");
        else if (number % 3 === 0) array.push("Fizz");
        else if (number % 5 === 0) array.push("Buzz");
        else array.push(number);
    }

    return array;
}

assert.deepEqual(fizzBuzz(2), [1, 2]);
assert.deepEqual(fizzBuzz(4), [1, 2, "Fizz", 4]);
assert.deepEqual(fizzBuzz(8), [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8]);
assert.deepEqual(fizzBuzz(20), [
    1,
    2,
    "Fizz",
    4,
    "Buzz",
    "Fizz",
    7,
    8,
    "Fizz",
    "Buzz",
    11,
    "Fizz",
    13,
    14,
    "FizzBuzz",
    16,
    17,
    "Fizz",
    19,
    "Buzz",
]);
assert.deepEqual(fizzBuzz(50), [
    1,
    2,
    "Fizz",
    4,
    "Buzz",
    "Fizz",
    7,
    8,
    "Fizz",
    "Buzz",
    11,
    "Fizz",
    13,
    14,
    "FizzBuzz",
    16,
    17,
    "Fizz",
    19,
    "Buzz",
    "Fizz",
    22,
    23,
    "Fizz",
    "Buzz",
    26,
    "Fizz",
    28,
    29,
    "FizzBuzz",
    31,
    32,
    "Fizz",
    34,
    "Buzz",
    "Fizz",
    37,
    38,
    "Fizz",
    "Buzz",
    41,
    "Fizz",
    43,
    44,
    "FizzBuzz",
    46,
    47,
    "Fizz",
    49,
    "Buzz",
]);
