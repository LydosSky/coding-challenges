import assert from "node:assert/strict";

/**
 * Given a string, determine if it is a valid email address using the
 * following constraints:
 * - It must contain exactly one @ symbol.
 * - The local part (before the @):
 *   - Can only contain letters (a-z, A-Z), digits(0-9), dots(.), underscores(_), or
 *   hyphens(-).
 *   - Cannot start or end with a dot.
 * - The domain part(after the @):
 *   - Must contain at least one dot.
 *   - Must end with a dot followed by at least two letters.
 * - Neither the local or domain part can have two dots in a row.
 **/
function validate(email: string): boolean {
  const EMAILREGEX =
    /^(?!.*\.\.)([A-Za-z0-9](?:[A-Za-z0-9._-]*[A-Za-z0-9])?)@(?:(?!.*\.\.)[A-Za-z0-9!_-]+(?:\.[A-Za-z0-9!_-]+)*\.[A-Za-z]{2,})$/;
  return EMAILREGEX.test(email);
}

assert.equal(validate("a@b.cd"), true);
assert.equal(validate("hell.-w.rld@example.com"), true);
assert.equal(validate(".b@sh.rc"), false);
assert.equal(validate("example@test.c0"), false);
assert.equal(validate("freecodecamp.org"), false);
assert.equal(validate("develop.ment_user@c0D!NG.R.CKS"), true);
assert.equal(validate("hello.@wo.rld"), false);
assert.equal(validate("hello@world..com"), false);
assert.equal(validate("git@commit@push.io"), false);
