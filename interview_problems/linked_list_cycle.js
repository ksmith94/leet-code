/**
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 *
 * There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
 *
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 * 
 * @param {ListNode} head 
 * @returns {boolean}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function hasCycle(head) {
  // Declare a slow pointer and a fast pointer
  let slow = head;
  let fast = head;

  // Loop over linked list while the fast pointer can still move forward by two positions
  while (fast && fast.next) {
    // Move slow forward by one position
    slow = slow.next;
    // Move fast forward by two positions
    fast = fast.next.next;

    // If there is a cycle, fast will eventually loop around and catch slow. If this happens they will be equal, at which point there is a cycle, return true
    if (slow === fast) return true;
  }

  // If fast reaches the end of the list, there is no cycle, return false
  return false;
}