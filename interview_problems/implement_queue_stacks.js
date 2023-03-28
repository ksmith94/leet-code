/**
 * Implement a FIFO queue using only two stacks. It should support `push`, `pop`, `peek`, and `empty`.
 */

var MyQueue = function() {
  // Two stacks - one to pop, one to push
  this.pushStack = [];
  this.popStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  // Simply push x onto the push stack
  this.pushStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  // The first item on our queue is either the last item of our popStack or the first item of our pushStack if there is nothing on the popStack.
  // If there is nothing on the popStack, we need to add each item from the pushStack to it in order. We can pop off the last item of pushStack and push it to popStack until pushStack is empty
  if (this.popStack.length === 0) {
    while (this.pushStack.length) {
      this.popStack.push(this.pushStack.pop());
    }
  }

  // Pop the last item off popStack and return it
  return this.popStack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  if (this.popStack.length) {
    // If there is something on the popStack, return the last item
    return this.popStack[this.popStack.length - 1];
  } else {
    // If popStack is empty, return the first item on the pushStack
    return this.pushStack[0];
  }
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  // Check that the length of both stacks is zero
  return (
    this.pushStack.length === 0
    && this.popStack.length === 0
  );
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */