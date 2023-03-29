/**
 * Given a binary tree, determine if it is height-balanced.
 * 
 * @param {TreeNode} root 
 * @returns {boolean}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function isBalanced(root) {
  // We will use a function to get the height of the tree. If it is every unbalanced, it will return -1, so we need to check that we do not get -1 from this function.
  return treeHeight(root) !== -1;
}

function treeHeight(root) {
  // Base case - backtrack
  if (!root) return 0;

  // Recursively call on left and right
  const left = treeHeight(root.left);
  const right = treeHeight(root.right);

  // If the absolute difference between left and right is greater than one, return -1
  if (Math.abs(left - right) > 1) return -1;
  // If we have already seen an unbalanced subtree, we can exit and return -1;
  if (left === -1 || right === -1) return -1;

  // If it is balanced, get the height and return it.
  const height = Math.max(left, right) + 1;
  return height;
}