/**
 * Write a function that sorts a given array using merge sort.
 * 
 * @param {number[]} nums 
 * @returns {number[]}
 */

function mergeSort(nums) {
  // We will call this recursivley until the length of the sub-array we are sorting is one or smaller
  if (nums.length <= 1) return nums;

  // Split the array into a left and right sub-array
  const middle = Math.floor(nums.length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle);

  // Recursively call our function on each sub-array
  const leftSorted = mergeSort(left);
  const rightSorted = mergeSort(right);

  // Return the merged sub-arrays
  return merge(leftSorted, rightSorted)
}

function merge(left, right) {
  // Track where we are in each array and declare a results array
  let leftPointer = 0;
  let rightPointer = 0;
  const result = [];

  // We will iterate until we reach the end of one of the arrays
  while (leftPointer < left.length && rightPointer < right.length) {
    // Add the smaller value from either array to our results and increment the pointer for that array
    if (left[leftPointer] <= right[rightPointer]) {
      result.push(left[leftPointer]);
      leftPointer++;
    } else {
      result.push(right[rightPointer]);
      rightPointer++;
    }
  }

  // For the array we did not reach the end of, add the rest of it to our result
  if (leftPointer < left.length) result.push(...left.slice(leftPointer));
  if (rightPointer < right.length) result.push(...right.slice(rightPointer));

  // Return our result
  return result;
}