const low = Math.pow(-2, 31);
const high = Math.pow(2, 31) - 1;

const startingDivisor = 1000000000;

const reverse = integer => {
  const digits = [];
  let negative = false;
  let divisor = startingDivisor;
  let valueLeft = integer;

  if (integer < 0) {
    valueLeft = valueLeft * -1;
    negative = true;
  }

  while (valueLeft > 0) {
    const digit = Math.floor(valueLeft / divisor);
    digits.unshift(digit);
    const numberToSubtract = digit * divisor;
    valueLeft = valueLeft - numberToSubtract;
    divisor = divisor / 10;
  }

  while (digits[digits.length - 1] === 0) {
    digits.pop();
  }

  let finalNumber = 0;
  let multiplier = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    finalNumber += digits[i] * multiplier;
    multiplier = multiplier * 10;
  }
  if (negative) {
    finalNumber = finalNumber * -1;
  }
  if (finalNumber >= low && finalNumber <= high) {
    return finalNumber;
  }
  return 0;
};
// const reverse = x => {
//   const rawDigits = [...`${x}`];
//   const isNegative = rawDigits[0] === '-';
//   const digits = isNegative ? rawDigits.slice(1) : rawDigits;
//   const reversedDigits = digits.reverse();
//   const rawValue = parseInt(reversedDigits.join(''));
//   const value = isNegative ? rawValue * -1 : rawValue;
//   if (value < low || value > high) {
//     return 0;
//   }
//   return value;
// };

module.exports = reverse;
