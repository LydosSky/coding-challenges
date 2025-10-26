import assert from "node:assert/strict";

/**
 * Given an integer number of seconds, return a string representing the same
 * duration in the format "H:MM:SS", wher "H" is the number of hours, 'MM' is
 * the number of minutes, and 'SS' is the number of seconds. Return the time
 * using the following rules:
 *
 * - Seconds: Should always be two digits.
 * - Minutes: Should omit leading zeros when they aren't needed. Use '0' if the
 * duration is less than a minute.
 * - Hours: Should be included only if they're greater than zero.
 * */
function format(seconds) {
    let hour = Math.floor(seconds / 3600);
    let minute = Math.floor((seconds % 3600) / 60);
    let second = Math.floor((seconds % 3600) % 60);

    let hourString = hour > 0 ? String(hour) + ":" : "";
    let minuteString =
        hour > 0 && minute < 10 ? "0" + String(minute) : String(minute);
    let secondString = second < 10 ? "0" + String(second) : String(second);

    return `${hourString}${minuteString}:${secondString}`;
}

assert.equal(format(500), "8:20");
assert.equal(format(4000), "1:06:40");
assert.equal(format(1), "0:01");
assert.equal(format(5555), "1:32:35");
assert.equal(format(99999), "27:46:39");
