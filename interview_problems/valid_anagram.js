/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 * 
 * @param {string} s 
 * @param {string} t
 * @returns {boolean} 
 */

function isAnagram(s, t) {
  // If the strings are not the same length, they cannot be anagrams and we can return false
  if (s.length !== t.length) return false;
  // Declare a hashmap to store our character values at
  const charCount = {};

  // Loop over each character of s, and add it to our hashmap
  for (const char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Loop over each character of t
  for (const char of t) {
    // If it isn't in our hashmap, or we have already used all of the instances of that character, we can return false
    if (!charCount[char] || charCount[char] === 0) return false;

    // Decrement the character's count
    charCount[char]--;
  }

  // If we reach this point, we can return true. Since we already checked the length at the beginning, we don't have to worry about that here.
  return true;
}