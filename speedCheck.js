import assert from "assert/strict";

/**
 * Given the speed you are traveling in miles per hour (MPH), and a speed
 * limit in kilometers per hour (KPH), determine whether you are speeding
 * and if you will get a warning or a ticket.
 *
 * @param {number} speedMph
 * @param {number} speedLimit
 * @returns {string}
 * */
function speedCheck(speedMph, speedLimit) {
    const diff = speedMph * 1.60934 - speedLimit;
    return diff > 0 && diff < 6
        ? "Warning"
        : diff > 5
          ? "Ticket"
          : "Not Speeding";
}

assert.equal(speedCheck(30, 70), "Not Speeding");
assert.equal(speedCheck(40, 60), "Warning");
assert.equal(speedCheck(40, 65), "Not Speeding");
assert.equal(speedCheck(60, 90), "Ticket");
assert.equal(speedCheck(65, 100), "Warning");
assert.equal(speedCheck(88, 40), "Ticket");
