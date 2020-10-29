const squareDigitsAndAdd = number => {
  const digits = number.toString().split('').map(Number);
  let total = 0;
  for (let i = 0; i < digits.length; i++) {
    total += digits[i] ** 2;
  }
  return total;
}

const isHappy = n => {
  if (n === 1) {
    return true;
  }

  let findTotal = n;
  const seen = new Set();
  while (findTotal !== 1 && !seen.has(findTotal)) {
    seen.add(findTotal);
    findTotal = squareDigitsAndAdd(findTotal);
    if (findTotal === 1) {
      return true;
    }
  }
  return false;
};

module.exports = isHappy;