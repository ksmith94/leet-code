/**
 * Write a function that, given an array of `numbers` and a `target`, returns the the
 * indices of the two numbers that add up to the `target`.
 * 
 * @param {number[]} nums 
 * @param {*number} target
 * @returns {number[]} 
 */

function twoSum(nums, target) {
  // Use a hashamp. The key will be the number and the value will be its index
  const cache = {};

  // Loop over the array using a basic for-loop, since we need to keep track of the index
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    // Determine the value we need, with our current value, to equal our target
    const need = target - current;

    // If we have already seen the needed value, we can return with its index and the current index
    if (need in cache) {
      return [cache[need], i];
    }

    // If we haven't seen the needed value, we add our current value and index to the hashmap
    cache[current] = i;
  }

  // Return -1 if there is no valid answer
  return -1;
}