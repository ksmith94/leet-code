function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * Given the root of a binary tree, return its maximum depth.
 *
 * A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 * 
 * @param {TreeNode} root 
 * @returns {number}
 */


function maxDepth(root) {
  // Base case - backtrack
  if (!root) return 0;

  // Traverse left and right
  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  // Return the larger of left and right and add one to get the current height of the given subtree
  const height = Math.max(left, right) + 1;

  // Return the height
  return height;
}