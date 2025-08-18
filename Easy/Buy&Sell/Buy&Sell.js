var maxProfit = function (prices) {
  let maxProfit = 0;
  let minProfit = prices[0];
  for (let i = 0; i < prices.length; i++) {
    minProfit = Math.min(minProfit, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - minProfit);
  }
  return maxProfit;
};
