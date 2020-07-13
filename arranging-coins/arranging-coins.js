
const arrangeCoins = n => {
  let counter = 0;
  let total = 0;
  while (n >= total) {
    counter++;
    total += counter;
  }
  return counter - 1;
};

module.exports = arrangeCoins;