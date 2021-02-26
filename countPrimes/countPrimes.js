const countPrimes = n => {
  // loop up to half the limit
  // rule out evens
  // only need to track count, not actual numbers
  // let primeCount = 0;

  // for (let candidate = 2; candidate < n; candidate++) {
  //   let isPrime = true;
  //   if (candidate % 2 === 0 && candidate !== 2) {
  //     isPrime = false;
  //   } else {
  //     for (let divisor = 3; divisor < candidate; divisor += 2) {
  //       if (candidate % divisor === 0) {
  //         isPrime = false;
  //         break;
  //       }
  //     }
  //   }
  //   if (isPrime) {
  //     primeCount++;
  //   }
  // }
  // return primeCount;

  // using sieve of eratosthenes
  // starting at square of 2 (4), elminate all multiples of 2
  // starting at square of 3, elminiate all multiples of 3
  // and so on, until you reach the end and only have primes left
  // add all non-primes to set
  // check as we go if

  if (n < 2) {
    return 0;
  }

  const nonPrimeSet = new Set();
  nonPrimeSet.add(1, 2);
  for (let i = 2; i < n / 2; i++) {
    for (let j = Math.pow(i, 2); j < n; j += i) {
      if (!nonPrimeSet.has(j)) {
        nonPrimeSet.add(j);
      }
    }
  }
  return n - nonPrimeSet.size - 1;
};

module.exports = countPrimes;
