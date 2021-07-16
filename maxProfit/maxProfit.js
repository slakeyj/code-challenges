const maxProfit = prices => {
  let total = 0;
  let buyPrice = null;

  for (let i = 0; i < prices.length - 1; i++) {
    if (buyPrice !== null && prices[i] > buyPrice) {
      total += prices[i] - buyPrice;
      buyPrice = prices[i];
    }
    if (prices[i] < prices[i + 1]) {
      buyPrice = prices[i];
    }
  }
  if (buyPrice === null) {
    return 0;
  }

  if (prices[prices.length - 1] > buyPrice) {
    total += prices[prices.length - 1] - buyPrice;
  }
  return total;
};

module.exports = maxProfit;
