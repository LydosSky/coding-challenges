import assert from "node:assert/strict";

/**
 * Given a string representing a time of the day in the 24-hour
 * format of "HHMM", return the time in its equivalent 12-hour
 * format of "H:MM AM" or "H:MM PM".
 * */
function to12(time: string): string {
  const hour = parseInt(time.slice(0, 2));
  const minute = parseInt(time.slice(2));

  const formatHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
  const formatMinute = minute < 10 ? minute + "0" : minute;
  const period = hour >= 12 ? "PM" : "AM";
  return `${formatHour}:${formatMinute} ${period}`;
}

assert.equal(to12("1124"), "11:24 AM");
assert.equal(to12("0900"), "9:00 AM");
assert.equal(to12("1455"), "2:55 PM");
assert.equal(to12("2346"), "11:46 PM");
assert.equal(to12("0030"), "12:30 AM");
