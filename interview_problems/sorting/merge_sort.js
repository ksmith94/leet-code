/**
 * Write a function that sorts a given array using merge sort.
 * 
 * @param {number[]} nums 
 * @returns {number[]}
 */

function mergeSort(nums) {
  if (nums.length <= 1) return nums;

  const middle = Math.floor(nums.length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle);

  const leftSorted = mergeSort(left);
  const rightSorted = mergeSort(right);

  return merge(leftSorted, rightSorted)
}

function merge(left, right) {
  let leftPointer = 0;
  let rightPointer = 0;
  const result = [];

  while (leftPointer < left.length && rightPointer < right.length) {
    if (left[leftPointer] <= right[rightPointer]) {
      result.push(left[leftPointer]);
      leftPointer++;
    } else {
      result.push(right[rightPointer]);
      rightPointer++;
    }
  }

  if (leftPointer < left.length) result.push(...left.slice(leftPointer));
  if (rightPointer < right.length) result.push(...right.slice(rightPointer));

  return result;
}