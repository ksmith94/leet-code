/**
 * Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
 *
 * Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
 * 
 * @param {string} s 
 * @returns {number}
 */

function longesPalindrome(s) {
  // Track characters with a hash map and the length of the longest palindrome
  const charCount = {};
  let longest = 0;

  // Loop over each character
  for (const char of s) {
    // Add character to hash map
    charCount[char] = (charCount[char] || 0) + 1;

    // If there is an even number of the given character, two can be added to the length of the palindrome
    if (charCount[char] % 2 === 0) longest += 2;
  }

  // Besides the evenly counted characters, there can be one additional character in the middle of the palindrome. If there are any characters that have not been used (aka the length of the string does not match the length of the longest palindrome) the longest can be incremented by one before being returned
  if (s.length !== longest) longest++;
  return longest;
}