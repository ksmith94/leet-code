/**
 * Write a function that, given an integer, returns it as a Roman numeral
 * 
 * @param {number} num 
 * @returns {string}
 */

function intToRoman(num) {
  // Declare an output to store our result
  let output = '';

  // Loop over each roman numeral/value pair
  for (let i = 0; i < romanValues.length; i++) {
    // Destructure to get the value and the numeral
    const [value, roman] = romanValues[i];

    // While the number is still larger than our current value, add the corresponding numeral to our output and reduce the number by the value. Since our array of values/numerals is sorted, we know we are adding the largest possible roman numeral
    while (num > value) {
      output += roman;
      num -= value;
    }
  }

  // Return the output
  return output;
}

// Store an array of pairs, with the value of each roman numeral sorted from largest to smallest
const romanValues = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L']
  [40, 'XL'],
  [10, 'X'],
  [9, 'XI'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I'],
]