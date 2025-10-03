import assert from "node:assert/strict";
import { checkPrime } from "node:crypto";

/**
 * Given a password string, return 'weak', 'medium', or 'strong' based on the
 * strength of the password.
 *
 * A password is evaluated according to the following rules:
 * - It is at least 8 characters long.
 * - It contains both uppercase and lowercase letters.
 * - It contains at least one number.
 * - It contains at least one special character from this set: !, @, #, $, %, ^, & or *.
 *
 * Return 'weak' if the password meets fewer than two of the rules. Return 'medium'
 * if the password meets 2 or 3 of the rules. Return 'strong' if the password meets
 * all 4 rules.
 * */
function checkStrength(password: string): string {
  const checks: Record<string, boolean> = {};
  checks["checkLength"] = password.length > 8;
  checks["checkCasing"] = /(?=.*[a-z])(?=.*[A-Z])/.test(password);
  checks["checkNumber"] = /\d+/.test(password);
  checks["checkSpecial"] = /[!@#$%^&*]/.test(password);

  let checkCount = 0;
  for (let c in checks) if (checks[c]) checkCount++;
  return checkCount === 4 ? "strong" : checkCount < 2 ? "weak" : "medium";
}

assert.equal(checkStrength("123456"), "weak");
assert.equal(checkStrength("pass!!!"), "weak");
assert.equal(checkStrength("Qwerty"), "weak");
assert.equal(checkStrength("PASSWORD"), "weak");
assert.equal(checkStrength("PASSWORD!"), "medium");
assert.equal(checkStrength("PassWord%^!"), "medium");
assert.equal(checkStrength("qwerty12345"), "medium");
assert.equal(checkStrength("S3cur3P@ssw0rd"), "strong");
assert.equal(checkStrength("C0d3&Fun!"), "strong");
