/**
 * Given the root of a binary tree, invert the tree, and return its root.
 * 
 * @param {TreeNode} root 
 * @returns {TreeNode}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function invertTree(root) {
  // Base case - backtrack
  if (!root) return null;

  // Recursively call invertTree on left and right
  invertTree(root.left);
  invertTree(root.right);

  // Swap our left and right nodes
  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  // Return the root with left and right swapped
  return root;
}