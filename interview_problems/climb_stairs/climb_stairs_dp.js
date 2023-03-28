/**
 * Write a function that, given a number `n` that represents the number of stairs in a staircase, return the number of distinct ways you can climb to the top of the staircase taking either one or two steps. 
 * 
 * @param {number} n 
 * @returns {number}
 */

function climbStairs(n) {
  // If n is less than three, we know there are n ways to climb
  if (n <= 3) return n;

  // This is a fibonacci sequence, so we can declare first and second, and start at 3.
  let first = 1;
  let second = 2;

  // Starting at 3, loop until we reach n
  for (let i = 3; i <= n; i++) {
    // Add our first and second and store in third. We are adding our two previous values to perfrom a fibonacci sequence.
    const third = first + second;
    // Update first to second and second to third so that we can continue with our fib
    first = second;
    second = third;
  }

  // Return our second value. When we reach n, we need to add our previous two values. We store this in third, and then that value to second, so this is what we need to return
  return second;
}