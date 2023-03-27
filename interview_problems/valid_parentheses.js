/**
 * Write a function that, given a string with only the characters '[', ']', '{', '}', '(', and ')', determines if the input is valid.
 * 
 * @param {string} s 
 * @returns {boolean}
 */

function isValid(s) {
  // Store all the possible opening parentheses in a cache, with their value as the corresponding closing parenthese
  const cache = {
    '(': ')',
    '{': '}',
    '[': ']'
  }
  // We will use a stack to track validity
  const stack = [];

  // Loop over each character in the string
  for (const char of s) {
    // If the character is an opening paren
    if (char in cache) {
      // Addd the corresponding closing paren to the stack
      stack.push(cache[char]);
    }
    // If the character is not an opening paren
    else {
      // Get the most recently added closing paren from our stack, which must match the current character
      const close = stack.pop();
      // If our current character does not match our close, we have an invalid input and can return false
      if (close !== char) return false;
    }
  }
  
  // If we reach the end and are valid, we still need to check that there are no hanging characters unaccounted for
  return stack.length === 0;
}