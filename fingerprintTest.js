import assert from "node:assert/strict";

/**
 * Given two strings representing fingerprints, determine if they are
 * a match using the following rules:
 *
 *   - Each fingerprint will consist only of lowercase letters(a-z).
 *   - Two fingerprints are considered a match if:
 *     - They are the same length.
 *     - The number of differing characters does not exceed 10% of
 *     the fingerprint length.
 * */
function isMatch(fingerprintA, fingerprintB) {
    const lowercase = /^[a-z]+$/;

    if (!lowercase.test(fingerprintA) || !lowercase.test(fingerprintB))
        return false;
    if (fingerprintA.length !== fingerprintB.length) return false;

    let difference = 0;
    for (let i = 0; i < fingerprintA.length; i++) {
        if (fingerprintA[i] !== fingerprintB[i]) difference++;
    }
    if (difference > (fingerprintA.length / 100) * 10) return false;

    return true;
}

assert.equal(isMatch("helloworld", "helloworld"), true);
assert.equal(isMatch("helloworld", "helloworlds"), false);
assert.equal(isMatch("helloworld", "jelloworld"), true);
assert.equal(
    isMatch(
        "thequickbrownfoxjumpsoverthelazydog",
        "thequickbrownfoxjumpsoverthelazydog",
    ),
    true,
);
assert.equal(
    isMatch(
        "theslickbrownfoxjumpsoverthelazydog",
        "thequickbrownfoxjumpsoverthehazydog",
    ),
    true,
);
assert.equal(
    isMatch(
        "thequickbrownfoxjumpsoverthelazydog",
        "thequickbrownfoxjumpsoverthehazycat",
    ),
    false,
);
