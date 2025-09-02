import assert from "node:assert/strict";

/**
 * Given a CSS rgb(r,g,b) color string, retuns its hexadecimal equivalent.
 *
 * - Make any letters lowercase
 * - Return a #followed by six characters. Don't use
 * any shorthand values.
 *
 * @param {string} rgb
 * @returns {string}
 * */
function rgbToHex(rgb) {
    const REGEX = /rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)/;
    return rgb
        .toLowerCase()
        .match(REGEX)
        .reduce(
            (prev, current, index) =>
                index > 0
                    ? (prev += parseInt(current).toString(16).padStart(2, 0))
                    : prev,
            "#",
        );
}

assert.equal(rgbToHex("rgb(255, 255, 255)"), "#ffffff");
assert.equal(rgbToHex("rgb(1, 11, 111)"), "#010b6f");
assert.equal(rgbToHex("rgb(173, 216, 230)"), "#add8e6");
assert.equal(rgbToHex("rgb(79, 123, 201)"), "#4f7bc9");
