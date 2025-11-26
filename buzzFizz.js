import assert from "assert/strict";

/**
 *  Given an array, determine if it is a correct FizzBuzz sequence from 1 to the
 *  last item in the array. A sequence is correct if:
 *
 *    - Numbers that are multiple of 3 are replaced with 'Fizz'
 *    - Numbers that are multiple of 5 are replaced with 'Buzz'
 *    - Numbers that are multiples of both 3 and 5 are replaced with 'FizzBuzz'
 *    - All other numbers remain as integers in ascending order, starting from 1
 *    - The array must start at 1 and have no missing or extra elements
 * */
function isFizzBuzz(sequence) {
    return sequence.reduce((prev, curr, index) => {
        let number = index + 1;
        if (number % 3 === 0 && number % 5 === 0)
            return curr === "FizzBuzz" && prev;
        else if (number % 3 === 0) return curr === "Fizz" && prev;
        else if (number % 5 === 0) return curr === "Buzz";
        else return number === curr && prev;
    }, true);
}

assert.equal(isFizzBuzz([1, 2, "Fizz", 4]), true);
assert.equal(isFizzBuzz([1, 2, 3, 4]), false);
assert.equal(isFizzBuzz([1, 2, "Fizz", 4, "Buzz", 7]), false);
assert.equal(
    isFizzBuzz([
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
        "FizzBuzz",
    ]),
    false,
);
assert.equal(
    isFizzBuzz([
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
        "Fizz",
    ]),
    false,
);
assert.equal(
    isFizzBuzz([
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
        "Buzz",
    ]),
    false,
);
assert.equal(
    isFizzBuzz([
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
    ]),
    true,
);
