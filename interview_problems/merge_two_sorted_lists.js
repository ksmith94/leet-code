/**
 * Write a function that, given the heads of two sorted linked lists, merges the two lists into one sorted list and returns the head of the list.
 * 
 * List Node Definition: 
 * function ListNode(val, next) {
 *   this.val = val === undefined ? 0 : val;
 *   this.next = next === undefined ? null : next;
 * }
 * 
 * @param {ListNode} list1 
 * @param {*ListNode} list2 
 */

function mergeTwoLists(list1, list2) {
  // Create a new node to easily access the beginning of our sorted list
  const head = new ListNode();
  // Use a node to track our place in the list as it is added to
  let node = head;

  // Continue to traverse the lists as long as neither have reached the end
  while (list1 && list2) {
    // Check which value should be added to our list first
      // Add the smaller value to the list
      // Traverse along the list that we added to our merged list
    if (list1.val <= list2.val) {
      node.next = list1;
      list1 = list1.next;
    } else {
      node.next = list2;
      list2 = list2.next;
    }

    // Update our node so that it is at the end of the list
    node = node.next;
  }

  // Add the remainder of whichever list has not ended and return our merged list
  node.next = (list1 || list2);
  return head.next;
}