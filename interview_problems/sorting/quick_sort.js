/**
 * Write a function that sorts a given array using quick sort.
 * 
 * @param {number[]} nums 
 * @returns {number[]}
 */

function quickSort(nums) {
  // Base case - recursively call until the sub-array is one number or fewer
  if (nums.length <= 1) return nums;

  // Declare a pivot to compare the rest of our values to
  const pivot = nums[0];
  // Declare left array for values smaller than our pivot
  const left = [];
  // Declare right array for values larger than our pivot
  const right = [];

  // Loop over nums, starting after our pivot. Add the value to left if it's smaller than pivot or right if it's larger
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  // Recursively call quickSort on our new sub-arrays
  const leftSorted = quickSort(left);
  const rightSorted = quickSort(right);

  // Combine our sorted left array, pivot, and sorted right array
  const result = leftSorted.concat(pivot, rightSorted);
  // Return our result
  return result;
}