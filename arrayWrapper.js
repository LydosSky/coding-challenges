/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function (nums) {
  this.numbers = [...nums];
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function () {
  return this.numbers.reduce((prev, curr) => (prev += curr), 0);
};

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function () {
  if (this.numbers.length === 0) return "[]";
  return this.numbers.reduce((prev, curr, index) => {
    if (index === 0) return `${curr}`;
    else if (index === this.numbers.length - 1) return `${prev},${curr}]`;
    else return `${prev},${curr}`;
  }, "");
};
