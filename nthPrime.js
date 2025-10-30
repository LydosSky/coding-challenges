import assert from "node:assert/strict";

/**
 * Given a positive integer n, return the nth prime number.
 * */
function nthPrime(n) {
    function isPrime(n) {
        if (n < 2) return false;
        if (n % 2 === 0) return n === 2;
        if (n % 3 === 0) return n === 3;

        // all primes > 3 are of the form 6k ± 1
        const limit = Math.floor(Math.sqrt(n));
        for (let i = 5; i <= limit; i += 6) {
            if (n % i === 0 || n % (i + 2) === 0) return false;
        }
        return true;
    }

    let count = 0;
    let current = 1;
    while (count < n) {
        current++;
        if (isPrime(current)) count++;
    }

    return current;
}

assert.equal(nthPrime(5), 11);
assert.equal(nthPrime(10), 29);
assert.equal(nthPrime(16), 53);
assert.equal(nthPrime(99), 523);
assert.equal(nthPrime(1000), 7919);
