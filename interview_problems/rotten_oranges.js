/**
 * You are given an m x n grid where each cell can have one of three values:
 * 0 representing an empty cell,
 * 1 representing a fresh orange, or
 * 2 representing a rotten orange.
 * 
 * Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange 
 * becomes rotten.
 * 
 * Return the minimum number of minutes that must elapse until no cell has a fresh 
 * orange. If this is impossible, return -1.
 * 
 * @param {number[][]} grid 
 * @returns {number}
 */

function orangesRotting(grid) {
  // Initialize by creating queue, a count of oranges, and a time tracker
  let queue = [];
  let oranges = 0;
  let time = 0;

  // Loop over the grid. If the orange is fresh, increment our orange count. If it is rotten, add its coordinates to the queue, with an additional zero to represent the time it took to rot
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === 1) oranges++;
      if (grid[r][c] === 2) queue.push([r, c, 0]);
    }
  }

  // Traverse while we have something in our queue and there are still oranges left
  while (queue.length && oranges) {
    // Destructure item off top of queue
    const [row, col, mins] = queue.shift();

    // Check if the orange is fresh
    if (grid[row][col] === 1) {
      // Update the orange to rotten
      grid[row][col] = 2;
      // Decrement fresh orange count
      oranges--;
      // Update time to the number of minutes it took for this orange to rot
      time = mins;
    }

    // From the current orange, traverse in each direction
    directions.forEach((dir) => {
      const next = [row + dir.row, col + dir.col];
      const [nextRow, nextCol] = next;

      // Check that we are at a valid coordinate and that there is a fresh orange at the coordinate
      if (
        isValidCoordinate(grid, next)
        && grid[nextRow][nextCol] === 1
      ) {
        // If there is, add it to the queue, with one minute added
        queue.push([nextRow, nextCol, mins + 1]);
      }
    })
  }

  // If we still have oranges remaining, then not all oranges were rotted, so we return -1; Otherwise return the time it took to rot everything
  return oranges ? -1 : time;
}

function isValidCoordinate(grid, next) {
  const [row, col] = next;
  if (row < 0 || row > grid.length - 1) return false;
  if (col < 0 || col > grid[0].length - 1) return false;
  return true;
}

const directions = [
  {row: -1, col: 0},
  {row: 1, col: 0},
  {row: 0, col: -1},
  {row: 0, col: 1}
]