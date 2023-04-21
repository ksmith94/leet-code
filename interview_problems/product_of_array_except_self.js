/**
 * Given an integer array nums, return an array answer such that answer[i] is equal 
 * to the product of all the elements of nums except nums[i].
 * 
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit 
 * integer.
 * 
 * You must write an algorithm that runs in O(n) time and without using the division 
 * operation.
 * 
 * @param {number[]} nums 
 * @returns {number[]}
 */

function productExceptSelf(nums) {
  // Create a prefix array
  const prefix = [];
  // Loop over nums
  for (let i = 0; i < nums.length; i++) {
    // First prefix is 1, since there is nothing to the left of the first element
    if (i === 0) {
      prefix[i] = 1;
    } else {
      // For all others, we multiply the previous number by the previous prefix and add it to our prefix array
      prefix[i] = nums[i - 1] * prefix[i - 1];
    }
  }

  // Create a suffix array
  const suffix = [];
  // Loop backwards over nums
  for (let i = nums.length - 1; i >= 0; i--) {
    // For the last index, our suffix is 1 since there is nothing to the right of the last element
    if (i === nums.length - 1) {
      suffix[i] = 1;
    } else {
      // For all others, we multiply the previous (i + 1, since we're going backwards) number by the previous suffix and add it to our suffix array
      suffix[i] = nums[i + 1] * suffix[i + 1];
    }
  }

  // Get the results
  const result = [];
  // Loop over the numbers and at each index multiply the prefix and suffix for that index
  for (let i = 0; i < nums.length; i++) {
    result.push(prefix[i] * suffix[i]);
  }

  // Return results
  return result;
}