/**
 * 
 * @param {integer} version number
 * @returns {boolean} whether the version is bad or not
 * isBadVersion = function(version) {
 *   ...
 * };
 */

/**
 * You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.
 * 
 * @param {function} isBadVersion()
 * @returns {function}
 */

function solution(isBadVersion) {
  /**
   * @param {integer} n
   * @returns {integer}
   */
  return function(n) {
    // Use binary search, so track left and right, starting with 0th and nth versions
    let left = 0;
    let right = n;

    // Loop until left === right
    while (left < right) {
      // Get the current version to test
      const version = Math.floor((left + right) / 2);

      if (isBadVersion(version)) {
        // If the version is bad shift so that right is that version
        right = version;
      } else {
        // If version is good, shift left to be one beyond that version
        left = version + 1;
      }
    }

    // Return the version at left when we broke out of the loop
    return left;
  }
}