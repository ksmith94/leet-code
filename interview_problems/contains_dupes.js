/**
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 * 
 * @param {number[]} nums 
 * @returns {boolean}
 */

function containsDupes(nums) {
  // Use a set to track nums we have seen
  const uniques = new Set();

  // Loop over all nums
  for (const num of nums) {
    // If we've seen the num, there are dupes, return true
    if (uniques.has(num)) return true;

    // Add the num to our set
    uniques.add(num);
  }

  // If we've reached the end without seeing dupes, return false
  return false;
}