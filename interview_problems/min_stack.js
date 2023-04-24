/**
 * Design a stack that supports push, pop, top, and retrieving the minimum element in 
 * constant time.
 * 
 * Implement the MinStack class:
 * MinStack() initializes the stack object.
 * void push(int val) pushes the element val onto the stack.
 * void pop() removes the element on the top of the stack.
 * int top() gets the top element of the stack.
 * int getMin() retrieves the minimum element in the stack.
 * 
 * You must implement a solution with O(1) time complexity for each function.
 */

const MinStack = function() {
  // Initialize the stack and a stack to track the index of the current min
  this.stack = [];
  this.minIndexStack = [];
};

MinStack.prototype.push = function(val) {
  // Add the value to the stack
  this.stack.push(val);

  // If this is the first valu being added to our stack, it is the minimum, so the minimum index will be 0
  if (this.minIndexStack.length === 0) {
    this.minIndexStack.push(0);
  } else {
    // Otherwise, we get the index of the minimum prior to adding this val to the stack
    const minIndex = this.minIndexStack.at(-1);
    if (val < this.stack[minIndex]) {
      // If the added value is less than the previous min, we add the index of the new val to our minIndexStack
      this.minIndexStack.push(this.stack.length - 1);
    } else {
      // Otherwise, we push on the same minIndex as previous
      this.minIndexStack.push(minIndex);
    }
  }
};


MinStack.prototype.pop = function() {
  // Pop off the last item on our minIndexStack. This corresponds with what is being popped off our stack, so if the minimum is being popped off, we will no longer have that as our minimum index
  this.minIndexStack.pop();
  // Pop off the last value of the stack
  return this.stack.pop();
};

MinStack.prototype.top = function() {
  // Simply return the last item on the stack
  return this.stack.at(-1);
};

MinStack.prototype.getMin = function() {
  // Get the index of the minimum value off our minIndexStack
  const minIndex = this.minIndexStack.at(-1);
  // Return the value at that index
  return this.stack[minIndex];
};