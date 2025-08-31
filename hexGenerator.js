const RANGE = 256;

/**
 * Given a names CSS color string, generate a random hexadecimal(hex)
 * color code that is dominant in the given color
 *
 * - The function should handle "red", "green", "blue", as an input
 * argument
 * - If the input is not one of those, fhe function should return
 * "Invalid color".
 * - The function should return a random six-character hex color code
 * where the input color value is greater than any of the others.
 * Examples
 *  - "red"   returns "FF0000"
 *  - "green" returns "00FF00"
 *  - "blue"  returns "0000FF"
 *
 * @param {string} color
 * @returns {string}
 * */
function generateHex(color) {
    switch (color) {
        case "red":
            return generateDominantColor(color);
        case "green":
            return generateDominantColor(color);
        case "blue":
            return generateDominantColor(color);
        default:
            return "Invalid color";
    }
}

/**
 * Generates a hex color with given color is the dominant
 * Given color can be one of the following
 * - 'red'
 * - 'green'
 * - 'blue'
 * @param {string} color
 * @returns {string}
 */
function generateDominantColor(color) {
    let red = randomInt(RANGE);
    let green = randomInt(RANGE);
    let blue = randomInt(RANGE);
    switch (color) {
        case "red":
            [red, green, blue] = firstBigger(red, green, blue);
            return hexValue(red, green, blue);
        case "green":
            [green, red, blue] = firstBigger(green, red, blue);
            return hexValue(red, green, blue);
        case "blue":
            [blue, red, green] = firstBigger(blue, red, green);
            return hexValue(red, green, blue);
        default:
            return "";
    }
}

/**
 * Generates random first number until first is
 * greater than second and third
 *
 * @param {number} first
 * @param {number} second
 * @param {number} third
 * @returns {Array<number>}
 * */
function firstBigger(first, second, third) {
    while (first < second || first < third) {
        first = randomInt(RANGE);
    }

    return [first, second, third];
}

/**
 * Generates and Formats hex number from three values of
 * red, green, and blue.
 * - Example (0, 16, 255)(r, g, b):
 *    evaluates to "0010FF"
 *
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 * @returns {string}
 * */
function hexValue(red, green, blue) {
    return (
        red.toString(16).padStart(2, "0") +
        green.toString(16).padStart(2, "0") +
        blue.toString(16).padStart(2, "0")
    ).toUpperCase();
}

/**
 * Generate a random integer between zero and given
 * number given number is exclusive (i.e. [0, max))
 *
 * @param {number} max
 * @returns {number}
 * */
function randomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
