import assert from "node:assert/strict";

/**
 * Return the number of files the hard drive can store using the following
 * constraints:
 * - The unit for the file size can be bytes('B')
 * - Return the number of whole files the drive can fit.
 * - Uses following conversions:
 *   + 1B   --- 1B
 *   + 1KB  --- 1000B
 *   + 1MB  --- 1000KB
 *   + 1GB  --- 1000MB
 * */
function numberOfFiles(
  fileSize: number,
  fileUnit: string,
  driveSizeGb: number,
): number {
  const totalSize = driveSizeGb * 1000 * 1000 * 1000;
  let fileSizeInByte;
  switch (fileUnit) {
    case "GB":
      fileSizeInByte = fileSize * 1000 * 1000 * 1000;
      break;
    case "MB":
      fileSizeInByte = fileSize * 1000 * 1000;
      break;
    case "KB":
      fileSizeInByte = fileSize * 1000;
      break;
    case "B":
      fileSizeInByte = fileSize;
      break;
    default:
      throw new Error("NO SUCH UNIT EXISTS");
  }

  return Math.floor(totalSize / fileSizeInByte);
}
assert.equal(numberOfFiles(500, "KB", 1), 2000);
assert.equal(numberOfFiles(50000, "B", 1), 20000);
assert.equal(numberOfFiles(5, "MB", 1), 200);
assert.equal(numberOfFiles(4096, "B", 1.5), 366210);
assert.equal(numberOfFiles(220.5, "KB", 100), 453514);
assert.equal(numberOfFiles(4.5, "MB", 750), 166666);
assert.throws(() => numberOfFiles(4.5, "KG", 751), /NO SUCH UNIT EXISTS/);
