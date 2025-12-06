import assert from "assert/strict";

/**
 * Given a date in the format "Month day, year", returns the date in format "YYYY-MM-DD".
 *
 *   - The given month will be the full English month name.
 *   - In the return value, pad the month and day with leading zeros if
 *
 * @param {string} dateString
 * @returns {string}
 * */
function formatDate(dateString) {
    const date = new Date(dateString);
    const padding = (number) => String(number).padStart(2, 0);
    return `${date.getFullYear()}-${padding(date.getMonth() + 1)}-${padding(date.getDate())}`;
}

assert.equal(formatDate("December 6, 2025"), "2025-12-06");
assert.equal(formatDate("January 1, 2000"), "2000-01-01");
assert.equal(formatDate("November 11, 1111"), "1111-11-11");
assert.equal(formatDate("September 7, 512"), "512-09-07");
assert.equal(formatDate("May 4, 1950"), "1950-05-04");
assert.equal(formatDate("February 29, 1992"), "1992-02-29");
