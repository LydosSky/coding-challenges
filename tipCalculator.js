import assert from "node:assert/strict";

/**
 * Given a price of your meal and a custom tip percent, return an array with
 * three tip values; 15%, 20%, and the custom amount.
 *
 * - Prices will be given in the format: "$N.NN".
 * - Custom tip percents will be given in this format: "25%"
 * - Return amounts in the same "$N.NN" format, rounded to two decimal places.
 * */
function calculateTips(mealPrice, customTip) {
    const tips = [15, 20, Number(customTip.slice(0, customTip.length - 1))];
    const price = Number(mealPrice.slice(1));
    return tips.map(
        (percent) =>
            "$" + (Math.round((price / 100) * percent * 100) / 100).toFixed(2),
    );
}

assert.deepEqual(calculateTips("$10.00", "25%"), ["$1.50", "$2.00", "$2.50"]);
assert.deepEqual(calculateTips("$89.67", "26%"), [
    "$13.45",
    "$17.93",
    "$23.31",
]);
assert.deepEqual(calculateTips("$19.85", "9%"), ["$2.98", "$3.97", "$1.79"]);
