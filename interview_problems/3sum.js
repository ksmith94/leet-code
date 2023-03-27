/**
 * Write a function that, given an array of numbers, returns all possible triplets of nubmers that add to 0. The numbers should not be repeated in a single triplet, and the triplets in the output array should not be repeated either.
 * 
 * @param {number[]} nums 
 * @returns {number[][]}
 */

function threeSum(nums) {
  // Sort nums so that we can use binary search
  nums.sort((a, b) => a - b);
  // Declare a set to track what we have already seen and a result array to store our results
  const cache = new Set();
  const result = [];

  // Loop over each item in nums
  for (let i = 0; i < nums.length; i++) {
    // Only process each number if we have not already seen it
    if (!cache.has(nums[i])) {
      // Store each number in our set
      cache.add(nums[i]);
      // Add the results of twoSum our result array
      result.push(...twoSum(nums, i));
    }
  }

  return result;
}

function twoSum(nums, start) {
  // Declare a cache to track which numbers we have already seen and a result array to store our results
  const cache = new Set();
  const result = [];

  // We will use a binary search to find numbers that add to zero. Since we are calling this when we loop over each item in nums and cannot repeat values, we can ignore everything prior to our starting index. We will only need to conduct the binary search on the numbers to the right of our start. We are able to do this because we sorted the array at the beginning of the threeSum function
  let left = start + 1;
  let right = nums.length - 1;

  // Do a binary search
  while (left < right) {
    // Store the sum of the values at our start, left, and right indices
    const sum = nums[start] + nums[left] + nums[right];

    // If our sum is less than zero, we increase our left index by one, which will increase the sum
    if (sum < 0) {
      left++;
    } 
    // If our sum is greater than zero, we increase our right index by one, which will decrease the sum
    else if (sum > 0) {
      right--;
    }
    // Otherwise our sum is zero 
    else {
      // Check if we've already seen one of our values, so as not to repeat
      if (!cache.has(nums[right])) {
        // Add a value to our set
        cache.add(nums[right]);
        // Add the values that sum to zero to our results
        result.push([nums[start], nums[left], nums[right]]);
        // Increment/decrement our left and right pointers. We can do both since we know changing one means we will no longer sum to zero, so there is no need to check for zero if only one changes.
        left++;
        right--;
      }

      // If the same value is in nums more than once, continue to decrement until we have a new value 
      while (cache.has(nums[right])) {
        right--;
      }
    }
  }

  // Return the results
  return result;
}