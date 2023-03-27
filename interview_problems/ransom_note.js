/**
 * Write a function that, given two strings - a ransom note and a magazine - returns true if you can construct the ransom note from only the characters in magazine and false otherwise.
 * 
 * @param {string} ransomNote 
 * @param {string} magazine 
 */

function canConstruct(ransomNote, magazine) {
  // Declare a cache to store the characters in magazine
  const charCount = {};

  // Loop over each character in magazine and add to charCount
  for (const char of magazine) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Loop over each character in ransomNote
  for (const char of ransomNote) {
    // If the character is not in magazine, or the value of that character has already been reduced to zero, we cannot construct the ransomNote, so return false
    if (!charCount[char] || charCount[char] === 0) {
      return false;
    }

    // Decrement the character count
    charCount[char]--;
  }

  // If we reach the end, we can construct the ransomNote
  return true;
}