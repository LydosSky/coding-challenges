import assert from "assert/strict";

/**
 * Given a date in the format 'YYYY-MM-DD', return the number of days left until the
 * weekend
 *   - The weeked starts on Saturday.
 *   - If the given date is Saturday or Sunday, return 'It's the weekend!'
 *   - Orelse, return 'X days until the weekend.', where X is the number of days
 *   until the saturday.
 *   - If X is 1, use "day" instead of 'days'.
 * */
function daysUntilWeekend(date) {
    const currentDay = new Date(date).getDay();

    switch (currentDay) {
        case 1:
        case 2:
        case 3:
        case 4:
            return `${6 - currentDay} days until the weekend.`;
        case 5:
            return "1 day until the weekend.";
        default:
            return "It's the weekend!";
    }
}

assert.equal(daysUntilWeekend("2025-11-14"), "1 day until the weekend.");
assert.equal(daysUntilWeekend("2025-01-01"), "3 days until the weekend.");
assert.equal(daysUntilWeekend("2025-12-06"), "It's the weekend!");
assert.equal(daysUntilWeekend("2026-01-27"), "4 days until the weekend.");
assert.equal(daysUntilWeekend("2026-09-07"), "5 days until the weekend.");
assert.equal(daysUntilWeekend("2026-11-29"), "It's the weekend!");
