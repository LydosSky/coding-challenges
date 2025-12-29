import assert from "assert/strict";

/**
 *  Given a positive integer, return the sum of all its divisors.
 *
 *    - A divisor is any integer that divides the number evenly.
 *    - Only count each divisor once.
 *
 *  @param {number} n
 *  @returns {number}
 * */
function sumDivisors(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) sum += i;
    }

    return sum;
}

assert.equal(sumDivisors(6), 12);
assert.equal(sumDivisors(13), 14);
assert.equal(sumDivisors(28), 56);
assert.equal(sumDivisors(84), 224);
assert.equal(sumDivisors(549), 806);
assert.equal(sumDivisors(9348), 23520);
