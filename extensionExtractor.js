import assert from "node:assert/strict";

/**
 * Given a string representing a filename, return the extension of the file
 *   - The extension if the par of the filename that comes after the last
 *   period (.).
 *   - If the filename does not contain a period or ends with a period,
 *   return 'none'
 *   - The extension should be returned as-is, preserving case.
 * @param {string} filename
 * @returns {string}
 * */
function getExtension(filename) {
    let lastPeriod;
    let extension = "";
    for (let index = 0; index < filename.length; index++) {
        if (filename[index] === ".") lastPeriod = index;
    }
    if (lastPeriod >= 0) extension = filename.slice(lastPeriod + 1);

    return extension ? extension : "none";
}

assert.equal(getExtension("document.txt"), "txt");
assert.equal(getExtension("README"), "none");
assert.equal(getExtension("image.PNG"), "PNG");
assert.equal(getExtension(".gitignore"), "gitignore");
assert.equal(getExtension("archive.tar.gz"), "gz");
assert.equal(getExtension("final.draft."), "none");
