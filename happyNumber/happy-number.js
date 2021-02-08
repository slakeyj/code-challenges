// Write an algorithm to determine if a number n is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// Return True if n is a happy number, and False if not.

// Example: 

// Input: 19
// Output: true
// Explanation: 
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

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