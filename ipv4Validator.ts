import assert from "node:assert/strict";

/**
 * Given a string, determines if it is a valid IPv4 Address.
 * A valid IPv4 address consists of four integer numbers
 * serparated by dots. Each number must satisfy the following
 * conditions:
 * - It is between 0 and 255 inclusive.
 * - It does not have leading zeros (e.g. 0 is allowed, 01 is not)
 * - Only numberic characters are allowed
 *
 * @param {string} ipv4
 * @returns {boolean}
 * */
function isValidIPv4(ipv4: string): boolean {
  const regex =
    /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?|0)\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?|0)/;
  return regex.test(ipv4);
}

assert.equal(isValidIPv4("192.168.1.1"), true);
assert.equal(isValidIPv4("0.0.0.0"), true);
assert.equal(isValidIPv4("255.01.50.111"), false);
assert.equal(isValidIPv4("255.00.50.111"), false);
assert.equal(isValidIPv4("256.101.50.115"), false);
assert.equal(isValidIPv4("192.168.101."), false);
assert.equal(isValidIPv4("192168145213"), false);
