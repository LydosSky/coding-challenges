import assert from "node:assert/strict";

/**
 * Given a video size, a unit for the video size, a hard drive capacity,
 * and a unit for the hard drive, return the number of videos the hard
 * drive can store using the following constraints:
 * - The unit for the video size can be bytes("B"), kilobytes("KB"),
 * megabytes("MB"), or gigabytes("GB")
 * - If not given one of the video units above, return "Invalid video unit"
 * - The unit of the hard drive capacity can be gigabytes("GB") or terabytes("TB")
 * - If not given one of the hard drive units above, return "Invalid drive unit"
 * - Return the number of whole videos the drive can fit.
 * - Use the following conversions:
 *   + 1B   --- 1B
 *   + 1KB  --- 1000B
 *   + 1MB  --- 1000KB
 *   + 1GB  --- 1000MB
 *   + 1TB  --- 1000GB
 * */
function numberOfVideos(
  videoSize: number,
  videoUnit: string,
  driveSize: number,
  driveUnit: string,
): string | number {
  if (videoUnit === "TB" || videoUnit === "B") return "Invalid video unit";
  if (driveUnit == "MB" || driveUnit === "KB" || driveUnit === "B")
    return "Invalid drive unit";

  return Math.floor(
    getBytes(driveSize, driveUnit) / getBytes(videoSize, videoUnit),
  );
}

assert.equal(numberOfVideos(500, "MB", 100, "GB"), 200);
assert.equal(numberOfVideos(2000, "B", 1, "TB"), "Invalid video unit");
assert.equal(numberOfVideos(2000, "MB", 100000, "MB"), "Invalid drive unit");
assert.equal(numberOfVideos(500000, "KB", 2, "TB"), 4000);
assert.equal(numberOfVideos(1.5, "GB", 2.2, "TB"), 1466);

/**
 * Converts given size with given unit returns in bytes
 * */
function getBytes(size: number, unit: string): number {
  switch (unit) {
    case "TB":
      return size * Math.pow(1000, 4);
    case "GB":
      return size * Math.pow(1000, 3);
    case "MB":
      return size * Math.pow(1000, 2);
    case "KB":
      return size * Math.pow(1000, 1);
    default:
      return 0;
  }
}
