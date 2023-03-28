/**
 * Write a function that, given a sorted array of integers and a target, returns the indices + 1 of the two integers that add to the target. Assume that there is exactly one solution and that the same integer cannot be used twice.
 * 
 * @param {number[]} nums 
 * @param {number} target 
 */

function twoSum(nums, target) {
  // We can do a binary search on this, so we will track a left and right pointer at opposite ends of nums
  let left = 0;
  let right = nums.length - 1;

  // Iterate over the array. Since the same integer can't be used twice, we don't want to use `<=` 
  while (left < right) {
    // Get the sum of our current pointers
    const sum = nums[left] + nums[right];

    // Compare sum and target
    if (sum < target) {
      // Increment left
      left++;
    } else if (sum > target) {
      // Decrement right
      right--;
    } else {
      // Return the indices + 1 if sum === target
      return [left + 1, right + 1];
    }
  }

  // We do not need an invalid case, since the assumption is that every input has one solution
}