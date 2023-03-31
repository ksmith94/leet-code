/**
 * Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
 * 
 * @param {TreeNode} root 
 * @returns {number[][]}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function levelOrder(root) {
  const result = [];
  // We will use BFS, with an array simulating a queue. We are going to track the level of the tree we are at, which will also match the index of the array that the values need to be added to.
  const queue = [[root, 0]];
  // If there is no root, we return an empty array
  if (!root) return result;

  // Traverse using BFS until the queue is empty
  while (queue.length) {
    // Get the node and the level
    const [node, level] = queue.shift();

    // If there is nothing a the level's index, we push an array to store the values. Since we are doing BFS, we will complete each level before we move on, so the index will always match the correct level.
    if (!result[level]) result.push([]);
    // Add the current node's value to its level array in result
    result[level].push(node.val);

    // Add any child nodes to the queue at a level one above the current
    if (node.left) queue.push([node.left, level + 1]);
    if (node.right) queue.push([node.right, level + 1]);
  }

  // Return the results
  return result;
}