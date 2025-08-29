import assert from "node:assert/strict";
import { argv0 } from "node:process";

/**
 * Given an integer representing the number of candles
 * you start with, and an integer representing how many
 * burned candles it takes to create a new one, return
 * the number of candles you will have used after creating
 * and burning as many as you can.
 *
 * For example, if given 7 candles and it takes 2 burned
 * candles to make a new one:
 *  1. Burn 7 candles to get 7 leftovers
 *  2. Recycle 6 leftovers into 3 new candles(1 leftover remains)
 *  3. Burn 3 candles to get 3 more leftovers(4 total)
 *  4. Recycle 4 leftovers into 2 new candles
 *  5. Burn 2 candles to get 2 leftovers
 *  6. Recycle 2 leftovers into 1 new candle
 *  7. Burn 1 candle.
 *
 *  You will have burned 13 total candles in the example.
 *
 *  @param {number} candles
 *  @param {number} leftoversNeeded
 *  @return {number}
 * */
function burnCandles(candles, leftoversNeeded) {
  function helper(burned, leftovers, total) {
    if (burned === 0) return total;
    const newTotal = total + burned;
    const newLeftovers = leftovers + burned;
    const newCandles = Math.floor(newLeftovers / leftoversNeeded);
    const remainingLeftovers = newLeftovers % leftoversNeeded;

    return helper(newCandles, remainingLeftovers, newTotal);
  }

  return helper(candles, 0, 0);
}

assert.equal(burnCandles(7, 2), 13);
assert.equal(burnCandles(10, 5), 12);
assert.equal(burnCandles(20, 3), 29);
assert.equal(burnCandles(17, 4), 22);
// assert.equal(burnCandles(2345, 3), 3517);
