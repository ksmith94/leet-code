/**
 * Write a function that, given a string, returns the longest substring of non-repeating characters
 * 
 * @param {string} s 
 * @returns {number}
 */

function lengthOfLongestSubstring(s) {
  // Track the unique letters in our substring and the length of the longest substring
  const uniques = new Set();
  let longest = 0;

  // We will use a two pointers sliding window technique, starting at the beginning of the string
  let left = 0;
  let right = 0;

  // Continue to traverse until we reach the end of the string
  while (right < s.length) {
    // Check if the character at our right index is not in our substring
    if (!uniques.has(s[right])) {
      // Add it to the substring and increment our right pointer
      uniques.add(s[right]);
      right++;
    } else {
      // Until the character at the right index is no longer in our substring. This ensures that we do not repeat any characters 
      while (uniques.has(s[right])) {
        // Remove the character at our left index and increment left index
        uniques.delete(s[left]);
        left++;
      }
    }

    // Update the longest if the number of characters in our uniques set is greater than the current longest substring
    longest = Math.max(longest, uniques.size);
  }

  return longest;
}