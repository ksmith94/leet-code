/**
 * Given an integer array nums, find the subarray with the largest sum, and return its sum.
 * 
 * @param {number[]} nums 
 * @returns {number}
 */

function maxSubArray(nums) {
  // track the value of the max and the current
  let max = nums[0];
  let current = nums[0];

  // Loop over each item in the array
  for (let i = 1; i < nums.length; i++) {
    // Reset current. If the ith number + current is larger than the ith number, then we want to combine them since that subarray will be larger than either the previous or ith subarray. If not, then just the ith number is our largest possible current subarray
    current = Math.max(current + nums[i], nums[i]);
    // If our current subarray is larger than our max, we update our max
    max = Math.max(max, current);
  }

  // Return our max subarray
  return max;
}