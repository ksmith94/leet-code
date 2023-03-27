/**
 * Write a function that, given a number `n` that represents the number of stairs in a staircase, return the number of distinct ways you can climb to the top of the staircase taking either one or two steps. 
 * 
 * @param {number} n 
 * @returns {number}
 */

function climbStairs(n) {
  if (n <= 3) return n;

  let one = 1;
  let two = 2;

  for (let i = 3; i <= n; i++) {
    const three = one + two;
    one = two;
    two = three;
  }

  return two;
}