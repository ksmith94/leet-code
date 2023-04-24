/**
 * You are given an integer array coins representing coins of different denominations 
 * and an integer amount representing a total amount of money.
 * 
 * Return the fewest number of coins that you need to make up that amount. If that 
 * amount of money cannot be made up by any combination of the coins, return -1.
 * 
 * You may assume that you have an infinite number of each kind of coin.
 * 
 * @param {number[]} coins 
 * @param {number} amount 
 * @returns {number}
 */

function coinChange(coins, amount) {
  const result = countCoins(coins, amount);
  return result === Infinity ? -1 : result;
}

function countCoins(coins, amount, memo = {}) {
  if (amount === 0) return 0;
  if (amount < 0) return Infinity;
  if (memo[amount]) return memo[amount];

  let min = Infinity;
  for (const coin of coins) {
    const remainder = amount - coin;
    const count = countCoins(coins, remainder, memo);
    min = Math.min(count + 1, min);
  }

  memo[amount] = min;
  return min;
}