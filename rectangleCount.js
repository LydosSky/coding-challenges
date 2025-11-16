import assert from "assert/strict";

/**
 * Given two positive integers representing the width and height of a rectangle,
 * determines how many rectangles can fit in the given one.
 *   - Onlys count rectangles with integer width and height.
 * */
function countRectangles(width, height) {
    return ((width * (width + 1)) / 2) * ((height * (height + 1)) / 2);
}

assert.equal(countRectangles(1, 3), 6);
assert.equal(countRectangles(3, 2), 18);
assert.equal(countRectangles(1, 2), 3);
assert.equal(countRectangles(5, 4), 150);
assert.equal(countRectangles(11, 19), 12540);
