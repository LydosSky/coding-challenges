import assert from "assert/strict";

/**
 * December 21st is the winter solstice for the northern hemisphere and the
 * summer solstice for the southern hemisphere. That means it's the day with
 * the least daylight in the north and the most daylight in the south.
 * Given latitude number from -90 to 90, returns a rough approximation of
 * daylight hours on the solstice.
 *
 * @param {number} latitude
 * @returns {number}
 * */
function daylightHours(latitude) {
    const table = {
        "-90": 24,
        "-75": 23,
        "-60": 21,
        "-45": 15,
        "-30": 13,
        "-15": 12,
        "0": 12,
        "15": 11,
        "30": 10,
        "45": 9,
        "60": 6,
        "75": 2,
        "90": 0,
    };

    let closest;
    let minDiff = Infinity;

    for (const key in table) {
        const diff = Math.abs(latitude - Number(key));
        if (diff <= minDiff) {
            minDiff = diff;
            closest = key;
        }
    }

    return table[closest];
}

assert.equal(daylightHours(45), 9);
assert.equal(daylightHours(0), 12);
assert.equal(daylightHours(-90), 24);
assert.equal(daylightHours(-10), 12);
assert.equal(daylightHours(23), 10);
assert.equal(daylightHours(88), 0);
assert.equal(daylightHours(-33), 13);
assert.equal(daylightHours(70), 2);
