/**
 * An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.
 *
 * You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].
 *
 * To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.
 *
 * Return the modified image after performing the flood fill.
 * 
 * @param {number[][]} image 
 * @param {number} sr 
 * @param {number} sc 
 * @param {number} color 
 * @returns {number[][]}
 */

function floodFill(image, sr, sc, color) {
  // Get the starting pixel color
  const currentColor = image[sr][sc];
  // If the current color is the same as the color we are changing to, nothing will change, so we can return the original image
  if (currentColor === color) return image;

  // Create a copy of the image
  const imageCopy = createImageCopy(image);
  // We will use BFS and simulate a queue with an array. Add the starting coordinates in an array to the queue
  const queue = [[sr, sc]];
  // Since we will process by updating the colors of the neighbors, we need to change the starting pixel before we begin our traversal
  imageCopy[sr][sc] = color;

  // Traverse the matrix
  while (queue.length) {
    const [row, col] = queue.shift();

    // From our starting point, we traverse by going in each direction
    directions.forEach((dir) => {
      // Declare next as the coordinates of the pixel we are traversing to, and get store the next row and column in their own variables
      const next = [row + dir.row, col + dir.col];
      const [nextRow, nextCol] = next;

      // If the next coordinate is valid and the color there matches the source pixel, we will update its color and add the coordinate to the queue.
      if (
        isValidCoordinate(imageCopy, next)
        && imageCopy[nextRow][nextCol] === currentColor
      ) {
        imageCopy[nextRow][nextCol] = color;
        queue.push(next);
      }
    });
  }

  // Return the updated copy
  return imageCopy;
}

const directions = [
  {row: -1, col: 0},
  {row: 1, col: 0},
  {row: 0, col: -1},
  {row: 0, col: 1},
]

/**
 * Creates a copy of a matrix
 * 
 * @param {nubmer[][]} image 
 * @returns {number[][]}
 */
function createImageCopy(image) {
  const rows = image.length;
  const columns = image[0].length;
  const copy = new Array(rows).fill()
    .map(() => new Array(columns).fill(false));

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      copy[r][c] = image[r][c];
    }
  }

  return copy;
}

/**
 * Checks the validity of a coordinate in a given matrix
 * 
 * @param {number[][]} image 
 * @param {number[]} next 
 * @returns 
 */
function isValidCoordinate(image, next) {
  const [row, col] = next;
  if (row < 0 || row > image.length - 1) return false
  if (col < 0 || col > image[0].length - 1) return false
  return true;
}