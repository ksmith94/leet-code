/**
 * Given the head of a singly linked list, return the middle node of the linked list.
 *
 * If there are two middle nodes, return the second middle node.
 * 
 * @param {ListNode} head 
 * @returns {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function middleNode(head) {
  // Declare a fast and slow pointer to move along the linked list
  let slow = head;
  let fast = head;

  // Loop while the fast can move ahead by two positions
  while (fast && fast.next) {
    // Move slow ahead by one position
    slow = slow.next;
    // Move fast ahead by two positions
    fast = fast.next.next;
  }

  // Fast is moving twice as quickly as slow. When it reached the end, slow will be at the middle of the list, so slow can be returned.
  return slow;
}