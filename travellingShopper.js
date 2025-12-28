import assert from "assert/strict";

/**
 *  Given an amount of money you have, and an array of items you want to buy,
 *  determine how many of them you can afford.
 *
 *  Using the following exchange rates to convert values:
 *  - USD -> 1.00    USD
 *  - EUR -> 1.10    USD
 *  - GBP -> 1.25    USD
 *  - JPY -> 0.0080  USD
 *  - CAD -> 0.75    USD
 *
 *
 *  @param {[string, string]} funds
 *  @param {[][string, string]} items
 *  @returns {string}
 * */
function buyItems(funds, items) {
    let amountOfFund = exchange(funds);
    let bought = 0;

    for (let item of items) {
        if (amountOfFund > 0 && exchange(item) < amountOfFund) {
            amountOfFund -= exchange(item);
            bought += 1;
        } else {
            break;
        }
    }

    if (bought === items.length) return "Buy them all!";
    return `Buy the first ${bought} items.`;
}

/**
 * Given funds returns dollar value of it.
 * @param {[string, string]} funds
 * @returns {number}
 * */
function exchange(funds) {
    const amount = Number(funds[0]);
    const currency = funds[1];
    switch (currency) {
        case "USD":
            return amount;
        case "EUR":
            return amount * 1.1;
        case "GBP":
            return amount * 1.25;
        case "JPY":
            return amount * 0.007;
        case "CAD":
            return amount * 0.75;
    }
}
assert.equal(exchange(["1.00", "USD"]), 1.0);
assert.equal(exchange(["2.00", "EUR"]), 2.2);
assert.equal(exchange(["1.00", "GBP"]), 1.25);
assert.equal(exchange(["1.00", "JPY"]), 0.007);
assert.equal(exchange(["1.00", "CAD"]), 0.75);

assert.equal(
    buyItems(
        ["150.00", "USD"],
        [
            ["50.00", "USD"],
            ["75.00", "USD"],
            ["30.00", "USD"],
        ],
    ),
    "Buy the first 2 items.",
);

assert.equal(
    buyItems(
        ["200.00", "EUR"],
        [
            ["50.00", "USD"],
            ["50.00", "USD"],
        ],
    ),
    "Buy them all!",
);

assert.equal(
    buyItems(
        ["100.00", "CAD"],
        [
            ["20.00", "USD"],
            ["15.00", "EUR"],
            ["10.00", "GBP"],
            ["6000", "JPY"],
            ["5.00", "CAD"],
            ["10.00", "USD"],
        ],
    ),
    "Buy the first 3 items.",
);
assert.equal(
    buyItems(
        ["5000", "JPY"],
        [
            ["3.00", "USD"],
            ["1000", "JPY"],
            ["5.00", "CAD"],
            ["2.00", "EUR"],
            ["4.00", "USD"],
            ["2000", "JPY"],
        ],
    ),
    "Buy them all!",
);

assert.equal(
    buyItems(
        ["200.00", "USD"],
        [
            ["50.00", "USD"],
            ["40.00", "EUR"],
            ["30.00", "GBP"],
            ["5000", "JPY"],
            ["25.00", "CAD"],
            ["20.00", "USD"],
        ],
    ),
    "Buy the first 5 items.",
);
