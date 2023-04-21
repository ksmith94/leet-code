/**
 * Given an array of points where points[i] = [xi, yi] represents a point on the X-Y
 * plane and an integer k, return the k closest points to the origin (0, 0).
 * 
 * The distance between two points on the X-Y plane is the Euclidean distance 
 * (i.e., √(x1 - x2)2 + (y1 - y2)2).
 * 
 * You may return the answer in any order. The answer is guaranteed to be 
 * unique (except for the order that it is in).
 * 
 * @param {number[][]} points 
 * @param {number} k 
 * @returns {number[][]}
 */

function kClosest(points, k) {
  // Track the distances as well as the index they are at in points
  const distances = [];
  // Array to store results
  const result = [];

  // Loop over each point, get the distance, and store it along with its index
  for (let i = 0; i < points.length; i++) {
    const [x, y] = points[i];
    const dist = (x ** 2) + (y ** 2);
    distances.push([dist, i]);
  }

  // Sort the distances, closest to farthest
  distances.sort((a, b) => a[0] - b[0]);

  // Loop over distances up to k to get k closest
  for (let i = 0; i < k; i++) {
    const index = distances[i][1];
    // Add the point at the given indices to our result
    result.push(points[index]);
  }

  // Return our results
  return result;
}
