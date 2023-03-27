function search(nums, target) {
  // Track a left and right index
  let left = 0;
  let right = nums.length - 1;

  // Search until the indices are beyond one another
  while (left <= right) {
    // Set the pointer in the middle of our left and right
    const pointer = Math.floor((left + right) / 2);
    // Store the value at our pointer
    const current = nums[pointer];

    // Compare our current value to the target
    if (current < target) {
      // Increase the left index
      left = pointer + 1;
    } else if (current > target) {
      // Decrease the right index
      left = pointer - 1 ;
    } else {
      // If the current value is the target, we have found our target and can return its index
      return pointer;
    }
  }

  // Invalid search - target not found
  return -1;
}