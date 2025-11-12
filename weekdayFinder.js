import assert from "node:assert/strict";

/**
 * Given a string date in the format 'YYYY-MM-DD', return the day of the week.
 * @param {string} date
 * @returns {string}
 * */
function getWeekday(date) {
    return new Date(date).toLocaleDateString("en-US", { weekday: "long" });
}

assert.equal(getWeekday("2025-11-06"), "Thursday");
assert.equal(getWeekday("1999-12-31"), "Friday");
assert.equal(getWeekday("1111-11-11"), "Saturday");
assert.equal(getWeekday("2112-12-21"), "Wednesday");
assert.equal(getWeekday("2345-10-01"), "Monday");
