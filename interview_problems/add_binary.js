/**
 * Given two binary strings, `a` and `b`, return their sum as a binary string.
 * 
 * @param {string} a 
 * @param {string} b 
 * @returns {string}
 */

function addBinary(a, b) {
  // We will track both binaries, starting at the end, or ones place
  let aPointer = a.length - 1;
  let bPointer = b.length - 1;

  // Track our output and what we need to carry over to the next value place
  let output = '';
  let carry = 0;

  // Loop until we have added the entirety of both binaries
  while (aPointer >= 0 || bPointer >= 0) {
    // As long as we have not reached the end, add the value at our given place to the carry
    if (aPointer >= 0) carry += parseInt(a[aPointer]);
    if (bPointer >= 0) carry += parseInt(b[bPointer]);

    // Add to our output. We mod carry by 2 to make sure that our value either a one or a zero so that our output will be in binary
    output = (carry % 2) + output;
    // We need to adjust our carry. Since we are only adding two values of either one or zero, the largest our carry can be is two. If it is two, we need to carry over an additional one into the next iteration. Otherwise we don't carry over anything. Dividing by two and flooring gives us this desired effect
    carry = Math.floor(carry / 2);

    // Decrement our pointers.
    aPointer--;
    bPointer--;
  }

  // If anything is left in our carry, we need to add an additional one to the front of our output
  if (carry !== 0) output = '1' + output;

  return output;
}