import assert from "node:assert/strict";

/**
 * Returns the number of photos the hard drive can store using the
 * following constraints.
 *
 * - 1 gigabyte equals 1000 megabytes
 * */
function numberOfPhotos(photoSizeMb: number, hardDriveSizeGb: number): number {
  return Math.floor((hardDriveSizeGb * 1000) / photoSizeMb);
}

assert.equal(numberOfPhotos(1, 1), 1000);
assert.equal(numberOfPhotos(2, 1), 500);
assert.equal(numberOfPhotos(4, 256), 64000);
assert.equal(numberOfPhotos(3.5, 750), 214285);
assert.equal(numberOfPhotos(3.5, 5.5), 1571);
