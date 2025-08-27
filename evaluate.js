import assert from "node:assert";
/**
 * Given an array of integers and an array of string
 * operators, apply the operations to the numbers seq
 * uentially from left-to-right. Repeat operations as
 * needed until all numbers are used. Return the final
 * result.
 *
 * - valid Operators are "+", '-', "*", "/", and "%"
 *
 * @param {Array<number>} numbers
 * @param {Array<string>} operators
 * @return {number} - final result
 * */
function evaluate(numbers, operators) {
  if (numbers.length < 1) return 0;
  let result = numbers[0];
  let opPtr = 0;
  for (let i = 1; i < numbers.length; i++) {
    result = calc(result, numbers[i], operators[opPtr]);
    if (opPtr >= operators.length - 1) opPtr = 0;
    else opPtr++;
  }

  return result;
}

assert.strictEqual(evaluate([], ["+", "-"]), 0);
assert.strictEqual(evaluate([5], ["+", "-"]), 5);
assert.strictEqual(evaluate([5, 6, 7, 8, 9], ["+", "-"]), 3);
assert.strictEqual(evaluate([17, 61, 40, 24, 38, 14], ["+", "%"]), 38);
assert.strictEqual(evaluate([20, 2, 4, 24, 12, 3], ["*", "/"]), 60);
assert.strictEqual(evaluate([11, 4, 10, 17, 2], ["*", "*", "%"]), 30);
assert.strictEqual(evaluate([33, 11, 29, 13], ["/", "-"]), -2);

/**
 * Calculates result based on the operation given
 * and numbers provided
 *
 * @param {number} num1
 * @param {number} num2
 * @param {string} operation
 * @return {number} - result
 * */
function calc(num1, num2, operation) {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    case "%":
      return num1 % num2;
  }
}

assert.strictEqual(calc(5, 4, "+"), 9);
assert.strictEqual(calc(5, 4, "*"), 20);
assert.strictEqual(calc(5, 4, "-"), 1);
assert.strictEqual(calc(5, 4, "%"), 1);
assert.strictEqual(calc(5, 4, "/"), 1.25);
