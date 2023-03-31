/**
 * Given a string s, return true if it is a palindrome, or false otherwise.
 * 
 * @param {string} s 
 * @returns {boolean}
 */

function isPalindrome(s) {
  // We will use a two-pointer closing window technique
  let left = 0;
  let right = s.length - 1;

  // Continue until the window is closed
  while (left < right) {
    // Get the character at the given left and right indices. We will convert them to lower-case to normalize them for comparison.
    let leftChar = s[left].toLowerCase();
    let rightChar = s[right].toLowerCase();

    // If the character is not a letter or number we want to skip it. We do this for both characters and until we reach a valid character
    while (left < right && !isAlphanumeric(leftChar)) {
      left++;
      leftChar = s[left].toLowerCase();
    }

    while (left < right && !isAlphanumeric(rightChar)) {
      right--;
      rightChar = s[right].toLowerCase();
    }

    // Once we have lower-case letters, we can compare them. If they are not the same, s is not a palindrom and we can return false.
    if (leftChar !== rightChar) return false;

    // Increment/decrement our pointers
    left++;
    right--;
  }

  // If we reach the end, we have a palindrom and can return true
  return true;
}

function isAlphanumeric(char) {
  return (
    char >= '0' && char <= '9'
    || char >= 'a' && char <= 'z'
  );
}