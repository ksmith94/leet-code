/**
 * You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.
 *
* Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

 * Return intervals after the insertion.
 * 
 * @param {number[][]} intervals 
 * @param {number[]} newInterval 
 * @returns {number[][]}
 */

function insert(intervals, newInterval) {
  // Initialize - get new interval values, declare result
  let [newStart, newEnd] = newInterval;
  const result = [];

  // We will need to iterate over each interval and track which one we are at, so i will track index
  let i = 0;
  let len = intervals.length;

  // Loop until we reach the end of intervals or our new interval starts to overlap
  while (i < len && newStart > intervals[i][1]) {
    // Add all non-overlapping intervals to result
    result.push(intervals[i]);
    i++;
  }
  // Once we break out of the above loop, we know that our new interval is overlapping with the `i`th interval
  
  // Continue to loop until the end of intervals, or until our new interval is no longer overlapping our current interval
  while (i < len && newEnd >= intervals[i][0]) {
    // We can merge by tracking the smallest and largest values while our intervals are overlapping
    newStart = Math.min(newStart, intervals[i][0]);
    newEnd = Math.max(newEnd, intervals[i][1]);
    i++;
  }
  // Add the new merged interval to our result
  result.push([newStart, newEnd]);

  // Add any remaining intervals
  while (i < len) {
    result.push(intervals[i]);
    i++;
  }

  // Return merged intervals
  return result;
}