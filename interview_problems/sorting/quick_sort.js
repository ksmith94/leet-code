/**
 * Write a function that sorts a given array using quick sort.
 * 
 * @param {number[]} nums 
 * @returns {number[]}
 */

function quickSort(nums) {
  if (nums.length <= 1) return nums;

  const pivot = nums[0];
  const left = [];
  const right = [];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  const leftSorted = quickSort(left);
  const rightSorted = quickSort(right);

  return leftSorted.concat(pivot, rightSorted);
}