/**
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 * 
 * @param {ListNode} head 
 * @returns {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function reverseList(head) {
  // Track our current and previous nodes
  let current = head;
  let prev = null;

  // Traverse to end of linked list
  while (current) {
    // Store our next node
    const next = current.next;
    
    // Set current.next to our prev node. We can then move our prev and current up one, to continue our iteration.
    current.next = prev;
    prev = current;
    current = next;
  }

  // Return the previous node, since current will be null
  return prev;
}