import assert from "node:assert";
/**
 * Given a string that contains properly nested parentheses
 * return the decoded version of the string using the following
 * rules:
 * - All characters inside each pair of parentheses should be
 *   reversed
 * - Parentheses should be removed from the final result
 * - If parentheses are nested, the innermost pair should be
 *   reversed first, and then its result should be included
 *   in the reversal of the outer pair.
 * - Assume all parentheses are evenly balanced and correctly
 *   nested.
 *  @param {string} str
 *  @returns {string} decoded string
 * */
function reverseParenthesis(str) {
    const stack = [];
    let result = "";
    for (let char of str) {
        if (char === "(") {
            stack.push(result);
            result = "";
        } else if (char === ")") {
            result = stack.pop() + reverseString(result);
        } else {
            result += char;
        }
    }

    return result;
}

/**
 * Reverses given string.
 *
 * @param {string} str
 * @returns {string} reversed string
 * */
function reverseString(str) {
    let newStr = "";
    for (let char of str) newStr = char + newStr;
    return newStr;
}
assert.strictEqual(reverseString("abcd"), "dcba");
assert.strictEqual(reverseString(""), "");

/**
 * => (f(b(dc)e)a)
 * => (f(bcde)a)
 * => (fedcba)
 * => abcdef
 * */
assert.strictEqual(reverseParenthesis("(f(b(dc)e)a)"), "abcdef");

/**
 * => ((is?)(a(t d)h)e(n y( uo)r)aC)
 * => ((is?)(ad th)e(n you r)aC)
 * => (?siht daer uoy naC)
 * => Can you read this?
 * */
assert.strictEqual(
    reverseParenthesis("((is?)(a(t d)h)e(n y( uo)r)aC)"),
    "Can you read this?",
);

/**
 * => f(Ce(re))o((e(aC)m)d)p
 * => f(Ce(re))o((eCam)d)p
 * => f(Ceer)o(maCed)p
 * => freeCodeCamp
 * */
assert.strictEqual(
    reverseParenthesis("f(Ce(re))o((e(aC)m)d)p"),
    "freeCodeCamp",
);
