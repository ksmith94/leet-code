/**
 * 
 * @param {number[]} nums 
 * @param {number} target 
 * @returns {number}
 */
function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const pointer = Math.floor((left + right) / 2);
    const current = nums[pointer];

    if (current === target) return pointer;

    if (nums[left] <= current) {
      if (nums[left] <= target && target <= current) {
        right = pointer - 1;
      } else {
        left = pointer + 1;
      }
    } else {
      if (current <= target && target <= nums[right]) {
        left = pointer + 1;
      } else {
        right = pointer - 1;
      }
    }
  }

  return -1;
}