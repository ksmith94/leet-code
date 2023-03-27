/**
 * Write a function that, given a number `n` that represents the number of stairs in a staircase, return the number of distinct ways you can climb to the top of the staircase taking either one or two steps. 
 * 
 * @param {number} n 
 * @returns {number}
 */

function climbStairs(n, cache = {}) {
  if (n === 0) return 1;
  if (n < 0) return 0;
  if (n in cache) return cache[n];

  const oneStep = climbStairs(n - 1, cache);
  const twoSteps = climbStairs(n - 2, cache);

  const steps = oneStep + twoSteps;
  cache[n] = steps;

  return steps;
}