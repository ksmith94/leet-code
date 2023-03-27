/**
 * Write a function that, given the root of a binary tree, returns the length of the diameter of the tree. The diameter refers to the longest path between two nodes in the tree.
 * 
 * @param {TreeNode} root 
 * @returns {number}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function diameterOfBinaryTree(root) {
  // Track the longest path. We will use closure to update this in a function that gets the height of the tree
  let longest = 0;

  // Function to get the height of the current tree. We will update the longest in this function as well
  function treeHeight(root) {
    // Base case - backtrack
    if (!root) return 0;

    // Traverse left and right
    const left = treeHeight(root.left);
    const right = treeHeight(root.right);

    // Get the height of the current tree
    const height = Math.max(left, right) + 1;
    // Update longest if necessary
    longest = Math.max(left + right, longest);

    // Return the height
    return height;
  }
  // Call our treeHeight function
  treeHeight(root);

  // return the longest path
  return longest;
}