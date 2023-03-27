/**
 * Write a function that evaluates an expression given in Reverse Polish Notation. The input is an array of strings that represents an arithmetic expression in this notation.
 * 
 * @param {string[]} tokens 
 * @returns {number}
 */

function evalRPN(tokens) {
  // Create an object with each operator and a function to perform its corresponding operation
  const operations = {
    '+': (left, right) => left + right,
    '-': (left, right) => left - right,
    '*': (left, right) => left * right,
    '/': (left, right) => Math.trunc(left / right),
  }
  // We will use a stack to process this
  const stack = [];

  // Loop over tokens
  for (const token of tokens) {
    // Check if the token is an operator
    if (token in operations) {
      // Store the function in operation
      const operation = operations[token];
      // Get the left and right values to perform the operation
      const right = stack.pop();
      const left = stack.pop();

      // Add the result of the operation to the stack
      stack.push(operation(left, right));
    } else {
      // Add the value to the stack if it is not an operator
      stack.push(parseInt(token));
    }
  }

  // return the last item on the stack
  return stack.at(-1);
}