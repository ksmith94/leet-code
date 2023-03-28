/**
 * Write a function that, given a number `n` that represents the number of stairs in a staircase, return the number of distinct ways you can climb to the top of the staircase taking either one or two steps. 
 * 
 * @param {number} n 
 * @returns {number}
 */

function climbStairs(n, cache = {}) {
  // Base case: if we are at zero, we have found one way to reach the top. If we go below zero, we have not found a way to reach the top and need to backtrack. If we have already seen n, we can just take the value from our cache.
  if (n === 0) return 1;
  if (n < 0) return 0;
  if (n in cache) return cache[n];

  // Our possible steps are one or two, so we recursively call climbStairs on n - 1 and n - 2.
  const oneStep = climbStairs(n - 1, cache);
  const twoSteps = climbStairs(n - 2, cache);

  // Add the possibilites from one and two steps and store it in our cache.
  const steps = oneStep + twoSteps;
  cache[n] = steps;

  // return the total number of steps
  return steps;
}