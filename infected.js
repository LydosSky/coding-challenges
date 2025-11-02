import assert from "node:assert/strict";
/**
 * Given a number of days that have passed since an internet worm was released,
 * and you need to determine how many computers are infected using the following
 * rules:
 *   - On day 0, the first computer is infected.
 *   - Each subsequent day, the number of infected computers doubles.
 *   - Every 3rd day, a patch is applied after the virus spreads and reduces
 *   the number of infected computers by 20%. Round the number of patched
 *   computers up to the nearest whole number.
 * */
function infected(days) {
    let infected = 1;
    for (let i = 1; i <= days; i++) {
        infected *= 2;
        if (i % 3 === 0) {
            infected -= Math.ceil(infected * 0.2);
        }
    }
    return infected;
}

assert.equal(infected(1), 2);
assert.equal(infected(3), 6);
assert.equal(infected(8), 152);
assert.equal(infected(17), 39808);
assert.equal(infected(25), 5217638);
