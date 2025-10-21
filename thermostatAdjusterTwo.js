import assert from "node:assert/strict";

/**
 * Given the current temperature of a room in Fahrenheit and a target temperature
 * in Celsius, return a string indicating how to adjust the room temperature based
 * on these constraints:
 * - Return 'Heat: X degrees Fahrenheit' if the current temperature is below the
 * target. With X being the number of degrees in Fahrenheit to heat the room to
 * reach the target, rounded to 1 decimal place.
 * - Return 'Cool: X degrees Fahrenheit' if the current remperature is above the
 * target. With X being the number of degrees in Fahreinheit to cool the room
 * to reach the target, rounded to 1 decimal place.
 * - Return 'Hold' if the current temperature is equal to the target.
 * */
function adjustThermostat(currentF, targetC) {
    const targetF = targetC * 1.8 + 32;
    const deltaF = Math.round(Math.abs(currentF - targetF) * 10) / 10;
    return currentF > targetF
        ? `Cool: ${deltaF.toFixed(1)} degrees Fahrenheit`
        : currentF < targetF
          ? `Heat: ${deltaF.toFixed(1)} degrees Fahrenheit`
          : "Hold";
}

assert.equal(adjustThermostat(32, 0), "Hold");
assert.equal(adjustThermostat(70, 25), "Heat: 7.0 degrees Fahrenheit");
assert.equal(adjustThermostat(72, 18), "Cool: 7.6 degrees Fahrenheit");
assert.equal(adjustThermostat(212, 100), "Hold");
assert.equal(adjustThermostat(59, 22), "Heat: 12.6 degrees Fahrenheit");
