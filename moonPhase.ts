import assert from "node:assert/strict";

/**
 * Given a date in the format "YYYY-MM-DD" and need to
 * determine the phase of the moon for that day using the
 * following rules:
 *
 * Use a simplified lunar cycle of 28 days, divided into four
 * equal phases:
 *   - "New": days 1-7
 *   - "Waxing": days 8-14
 *   - "Full": days 15-21
 *   - "Waning": days 22-28
 * After day 28, the cycle repeats with day 1, a new moon.
 *   - Use "2000-01-06" as a reference new moon(day 1 of the cycle) to
 *   determine the phase of the given day.
 *   - You will not be given any dates before the reference date.
 *   - Return the correct phase as a string.
 * */
function moonPhase(dateString: string): string {
  const REFERENCEDATE = new Date("2000-01-06").getTime();
  const currentDate = new Date(dateString).getTime();
  const secondsDelta = Math.abs(currentDate - REFERENCEDATE);
  const numOfDays = secondsDelta / (1000 * 60 * 60 * 24);
  const phase = numOfDays % 28;
  switch (true) {
    case phase < 7:
      return "New";
    case phase < 14:
      return "Waxing";
    case phase < 21:
      return "Full";
    case phase < 28:
      return "Waning";
    default:
      return "Invalid Date";
  }
}

assert.equal(moonPhase("2000-01-12"), "New");
assert.equal(moonPhase("2000-01-13"), "Waxing");
assert.equal(moonPhase("2014-10-15"), "Full");
assert.equal(moonPhase("2012-10-21"), "Waning");
assert.equal(moonPhase("2022-12-14"), "New");
