import assert from "node:assert/strict";

/**
 * Given a 2D array points of size n x 2 representing integer coordinates of
 * some point on a 2D plane, where points[i] = [x_i, y_i].
 *
 * Counts the number of pairs of points (A, B) where
 * - A is on the upper left side of B, and
 * - There are no other points in the rectangle (or line) they make (including
 * the border).
 *
 * @param {Array<Array<number>>} points
 * @return {number}
 * */
function numberOfPairs(points) {
    let count = 0;
    for (let i = 0; i < points.length; i++)
        for (let j = 0; j < points.length; j++)
            if (
                i !== j &&
                isLeft(points[i], points[j]) &&
                clearInside(i, j, points)
            )
                count++;
    return count;
}

assert.equal(
    numberOfPairs([
        [1, 1],
        [2, 2],
        [3, 3],
    ]),
    0,
    "first case",
);
assert.equal(
    numberOfPairs([
        [6, 2],
        [4, 4],
        [2, 6],
    ]),
    2,
    "second case",
);
assert.equal(
    numberOfPairs([
        [3, 1],
        [1, 3],
        [1, 1],
    ]),
    2,
    "third case",
);

/**
 * Given Two Point which are representing points on a 2D planes
 * check whether first one is on the left upper side of he second
 * one.
 *
 * @param {Array<number>} first
 * @param {Array<number>} second
 * @returns {boolean}
 * */
function isLeft(first, second) {
    const [fX, fY] = first;
    const [sX, sY] = second;
    return fX <= sX && fY >= sY;
}

assert.equal(isLeft([1, 3], [3, 1]), true);
assert.equal(isLeft([1, 1], [1, 1]), true);
assert.equal(isLeft([1, 1], [3, 1]), true);
assert.equal(isLeft([3, 1], [1, 1]), false);

/**
 * Takes index of two points and a list of points, determines wheter any of the
 * points fall inside of the area pair creates or the line pair creates. It ignores
 * copies of the given Two points.
 *
 * @param {number} first
 * @param {number} second
 * @param {Array<Array<number>>} points
 * @returns {boolean}
 * */
function clearInside(first, second, points) {
    const [fX, fY] = points[first];
    const [sX, sY] = points[second];
    const minX = Math.min(fX, sX);
    const maxX = Math.max(fX, sX);
    const minY = Math.min(fY, sY);
    const maxY = Math.max(fY, sY);

    for (let i = 0; i < points.length; i++) {
        if (i === first || i === second) continue;
        const [currX, currY] = points[i];

        if (fX === sX) {
            if (currX === fX && currY >= minY && currY <= maxY) return false;
        } else if (fY === sY) {
            if (currY === fY && currX >= minX && currX <= maxX) return false;
        } else if (
            currX >= minX &&
            currX <= maxX &&
            currY >= minY &&
            currY <= maxY
        )
            return false;
    }

    return true;
}

assert.equal(
    clearInside(0, 1, [
        [6, 2],
        [4, 4],
        [2, 6],
    ]),
    true,
);
assert.equal(
    clearInside(1, 2, [
        [6, 2],
        [4, 4],
        [2, 6],
    ]),
    true,
);
assert.equal(
    clearInside(0, 2, [
        [6, 2],
        [4, 4],
        [2, 6],
    ]),
    false,
);
