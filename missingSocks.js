import assert from "node:assert/strict";

/**
 * Given an integer representing the number of pairs of socks you started
 * with, and another integer representing how many wash cycles you have gone
 * through, return the number of complete pairs of socks you currently have
 * using the following contstraints:
 *
 * - Every 2 wash cycles, you lose a single sock.
 * - Every 3 wash cycles, you find a single missing sock.
 * - Every 5 wash cycles, a single sock is worn out and must be thrown away.
 * - Every 10 wash cycles, you buy a pair of socks.
 * - You can never have less than zero total socks.
 * - Rules can overlap.
 * - Return the number of complete pairs of socks.
 * */

function sockPairs(pairs, cycles) {
    let numberOfSocks = pairs * 2;
    for (let i = 1; i <= cycles; i++) {
        if (i % 2 === 0) numberOfSocks--;
        if (i % 3 === 0) numberOfSocks++;
        if (i % 5 === 0) numberOfSocks--;
        if (i % 10 === 0) numberOfSocks += 2;
    }

    return numberOfSocks > 0 ? Math.floor(numberOfSocks / 2) : 0;
}

assert.equal(sockPairs(2, 5), 1);
assert.equal(sockPairs(1, 2), 0);
assert.equal(sockPairs(5, 11), 4);
assert.equal(sockPairs(6, 25), 3);
assert.equal(sockPairs(1, 8), 0);
