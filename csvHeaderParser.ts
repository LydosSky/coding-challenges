import assert from "node:assert/strict";

/**
 * Given the first line of a comma-separated values (CSV) file, return an
 * array containing the headings.
 * - The first line of a CSV file contains heading separated by commas.
 * - Remove any leading or trailing whitespace from each heading.
 * */
function getHeading(csv: string): string[] {
  return csv.split(",").map((heading) => heading.trim());
}

assert.deepEqual(getHeading("name,age,city"), ["name", "age", "city"]);
assert.deepEqual(getHeading("first name,last name,phone"), [
  "first name",
  "last name",
  "phone",
]);
assert.deepEqual(getHeading("username , email , signup date "), [
  "username",
  "email",
  "signup date",
]);
