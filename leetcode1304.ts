/**
 * Given an integer n, return any array containing n unique integers
 * such that they add up to 0.
 * */
function sumZero(n: number): number[] {
  const nums = [];

  for (let i = 0; i < n; i++) {
    if (n % 2 === 1 && nums.length === 0) nums.push(0);
    else if (i !== 0) {
      nums.unshift(-i);
      nums.push(i);
    }

    if (nums.length === n) break;
  }

  return nums;
}
