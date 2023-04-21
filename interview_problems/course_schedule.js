/**
 * 
 * There are a total of numCourses courses you have to take, labeled from 0 to 
 * numCourses - 1. You are given an array prerequisites where prerequisites[i] = 
 * [ai, bi] indicates that you must take course bi first if you want to take 
 * course ai.
 * For example, the pair [0, 1], indicates that to take course 0 you have to 
 * first take course 1.
 * Return true if you can finish all courses. Otherwise, return false.
 * 
 * @param {number} numCourses 
 * @param {number[][]} prerequisites 
 * @returns {boolean}
 */

function canFinish(numCourses, prerequisites) {
  // Array to track the number of prerequisites for each course, where each index represents the corresponding course
  const inDegree = new Array(numCourses).fill(0);
  const queue = [];

  // Go over each set of prereqs and increment the count of prereqs for that course
  for (const [course] of prerequisites) {
    inDegree[course]++;
  }

  // If there are no prereqs we can take the course, so we can add it to the queue
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  // Track the count of courses we are able to take
  let count = 0;

  //BFS
  while (queue.length) {
    // For every course in the queue, increment the count of courses we can take
    const c = queue.pop();
    count++;

    // Loop over each pair of course and prereq
    for (const [course, prereq] of prerequisites) {
      // If we can take the prereq, we can decrement the number of prereqs for the course. Each course will only go in the queue once, so we don't have to worry about decrementing twice for the same course
      if (prereq === c) {
        inDegree[course]--;
        // If there are zero prereqs left for a course, we can now take that course so we add it to the queue
        if (inDegree[course] === 0) {
          queue.push(course);
        }
      }
    }
  }

  // If the count equals the number of courses, we can take all courses, so we return true. If not we return false
  return count === numCourses;
}