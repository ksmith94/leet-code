/**
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
 * 
 * @param {number[][]} intervals 
 * @returns {number[][]}
 */

function merge(intervals) {
  // Sort intervals buy start time
  intervals.sort((a, b) => a[0] - b[0]);
  // Store results, with first interval already in the array
  const result = [intervals[0]];

  // Loop over remaining intervals
  for (let i = 1; i < intervals.length; i++) {
    // Get the current start, current end, and previous end times
    const [currentStart, currentEnd] = intervals[i];
    const previousEnd = result.at(-1)[1];

    if (currentStart > previousEnd) {
      // If they are not overlapping, push the current interval onto result
      result.push(intervals[i]);
    } else {
      // If they are overlapping, update the end time of the last result item to the larger of the current and previous ends. Since we already sorted by start, we do not need to worry about changing start times.
      result.at(-1)[1] = Math.max(currentEnd, previousEnd);
    }
  }

  // Return the result
  return result;
}