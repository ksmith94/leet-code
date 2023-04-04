/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 *
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 *
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 * 
 * @param {number[]} prices 
 * @returns {number}
 */

function maxProfit(prices) {
  // Use a greedy approach. Start the profit as zero, since that is the minimum profit we can return.
  let profit = 0;
  // The min price to start will be the first price in the array
  let minPrice = prices[0];

  // Loop over the prices, skipping index 0 (our minPrice)
  for (let i = 1; i < prices.length; i++) {
    // Declare the current price
    const currentPrice = prices[i];
    // Our potential profit is the current price minus the lowest price so far
    const potentialProfit = currentPrice - minPrice;

    // Update our min price if the current price is smaller
    minPrice = Math.min(minPrice, currentPrice);
    // Update our max profit if our potential profit is lareger
    profit = Math.max(profit, potentialProfit);
  }

  // Return the max profit
  return profit;
}