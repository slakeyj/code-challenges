const primeCache = {};
const factorsCache = {};

const isUgly = num => {
  if (num < 1) {
    return false;
  }
  if (num === 1) {
    return true;
  }
  const factors = getFactors(num);
  const primeFactors = factors.filter(isPrime);
  return primeFactors.every(isUglyFactor);
}

const isPrime = num => {
  if (primeCache[num] !== undefined) {
    return primeCache[num];
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      primeCache[num] = false;
      return false;
    }
  }
  primeCache[num] = true;
  return true;
}

const getFactors = num => {
  if (factorsCache[num]) {
    return factorsCache[num];
  }
  const factors = [num];
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  factorsCache[num] = factors;
  return factors;
}

const isUglyFactor = num => num % 2 === 0 || num % 3 === 0 || num % 5 === 0;


module.exports = isUgly;