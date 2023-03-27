/**
 * Write a function that, given a reference node in a connected, undirected graph, returns a deep copy of that graph.
 * 
 * function Node(val, neighbors) {
 *   this.val = val === undefined ? 0 : val;
 *   this.neighbors = neighbors === undefined ? [] : neighbors;
 * }
 * 
 * @param {Node} node 
 * @param {Object} visited 
 * @returns {Node}
 */

function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

function cloneGraph(node, visited = {}) {
  // Base case
  if (!node) return node;
  // Check if we have already seen this node
  if (node.val in visited) return visited[node.val];

  // Make a copy of the node and mark it visited
  const nodeCopy = new Node(node.val);
  visited[nodeCopy.val] = nodeCopy;

  // Loop over all the node's neighbors 
  for (const neighbor of node.neighbors) {
    // Recursively call cloneGraph on each neighbor to make a copy of it
    const neighborCopy = cloneGraph(neighbor, visited);
    // Add each copy of the neighbor to nodeCopy's neighbor array
    nodeCopy.neighbors.push(neighborCopy);
  }

  return nodeCopy;
}