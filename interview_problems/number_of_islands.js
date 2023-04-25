/**
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's 
 * (water), return the number of islands.
 * 
 * An island is surrounded by water and is formed by connecting adjacent lands 
 * horizontally or vertically. You may assume all four edges of the grid are all 
 * surrounded by water.
 * 
 * @param {character[][]} grid 
 * @returns {number}
 */

function numIslands(grid) {
  // Track the number of islands we've seen
  let islandCount = 0;

  // Loop over the entire grid
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      // If we see a '1', we are on an island so increment the island count. We'll traverse across the entire island, and remove it from the grid. This way we can continue to loop over the grid and we won't run into this island again
      if (grid[r][c] === '1') {
        islandCount++;
        grid[r][c] = '0';
        traverseIsland(grid, r, c);
      }
    }
  }

  // Return the number of islands we encountered on our traversal
  return islandCount;
}

function traverseIsland(grid, row, col) {
  // Store the directions to traverse in an array of objects
  const directions = [
    {row: -1, col: 0},
    {row: 1, col: 0},
    {row: 0, col: -1},
    {row: 0, col: 1},
  ]

  // Traverse in each direction
  directions.forEach((dir) => {
    // Store the updated row/column we are traversing
    const nextRow = row + dir.row;
    const nextCol = col + dir.col;

    // Check if the next coordinate is on the grid, and it is a part of the island we are on
    if (
      isValidCoordinate(grid, nextRow, nextCol)
      && grid[nextRow][nextCol] === '1'
    ) {
      // If it is, remove that coordinate from the island, and traverse to its neighbors
      grid[nextRow][nextCol] = '0';
      traverseIsland(grid, nextRow, nextCol);
    }
  });
};

// Checks that a given coordinate is valid on a given grid
function isValidCoordinate(grid, row, col) {
  if (row < 0 || row > grid.length - 1) return false; 
  if (col < 0 || col > grid[0].length - 1) return false;
  return true; 
}