/**
 * Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.
 *
 * The distance between two adjacent cells is 1.
 * 
 * @param {number[][]} mat 
 * @returns {number[][]}
 */

function updateMatrix(mat) {
  // Declare an empty queue for BFS
  const queue = [];
  // Create a copy to track which coordinates have already been processed
  const matCopy = initializeQueueAndCopy(mat, queue);

  // Process each coordinate and update the copy as necessary
  processQueueAndCopy(matCopy, queue);
  // Return the updated copy
  return matCopy;
}

/**
 * Given a matrix and queue of coordinates and levels, processes each item off the queue using BFS. If necessary, updates the copy's coordinates to the distance it is from the nearest 0.
 * 
 * @param {number[][]} copy 
 * @param {number[][]} queue 
 * @returns {void}
 */
function processQueueAndCopy(copy, queue) {
  while (queue.length) {
    const [row, col, level] = queue.shift();

    directions.forEach((dir) => {
      const next = [row + dir.row, col + dir.col, level + 1];
      const [nextRow, nextCol, nextLevel] = next;

      if (
        isValidCoordinate(copy, next)
        && copy[nextRow][nextCol] === Infinity
      ) {
        queue.push(next);
        copy[nextRow][nextCol] = nextLevel;
      }
    })
  }
}

const directions = [
  {row: -1, col: 0},
  {row: 1, col: 0},
  {row: 0, col: -1},
  {row: 0, col: 1},
]

/**
 * Checks if a set of given coordinates are valid in a given matrix.
 * 
 * @param {number[][]} mat 
 * @param {nubmer[]} next 
 * @returns {boolean}
 */

function isValidCoordinate(mat, coordinates) {
  const [row, col] = coordinates;
  if (row < 0 || row > mat.length - 1) return false;
  if (col < 0 || col > mat[0].length - 1) return false;
  return true;
}

/**
 * Takes a matrix and creates a copy of the same size with all zeroes copied to the new matrix.
 * 
 * The coordinates of the zeroes also get enqueued along with the depth from a zero that they are (in this case it will always be zero). 
 * 
 * @param {number[][]} mat 
 * @param {number[][]} queue 
 * @returns {number[][]}
 */

function initializeQueueAndCopy(mat, queue) {
  const rows = mat.length;
  const columns = mat[0].length;
  const matCopy = new Array(rows).fill()
    .map(() => new Array(columns).fill(Infinity));

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      if (mat[r][c] === 0) {
        matCopy[r][c] = 0;
        queue.push([r, c, 0]);
      }
    }
  }

  return matCopy;
}