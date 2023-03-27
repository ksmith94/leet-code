/**
 * Write a function that, given a sorted array of integers and a target, returns the indices + 1 of the two integers that add to the target. Assume that there is exactly one solution and that the same integer cannot be used twice.
 * 
 * @param {number[]} nums 
 * @param {number} target 
 */

function twoSum(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    } else {
      return [left + 1, right + 1];
    }
  }
}