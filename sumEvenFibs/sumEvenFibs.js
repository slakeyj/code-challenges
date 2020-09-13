// use a javascript generator to calculate fibs infinitely
// function* fibs() {
//   let currentFib = 1;
//   let previousFib = 1;
//   while (true) {
//     const tempFib = currentFib;
//     currentFib = currentFib + previousFib;
//     previousFib = tempFib;
//     yield currentFib;
//   }
// }

// const isEven = fib => fib % 2 === 0;

// const sumEvenFibs = (maxFib) => {
//   const fibsGenerator = fibs();
//   const fibsSet = []
//   let currentFib = fibsGenerator.next().value;
//   while (currentFib < maxFib) {
//     fibsSet.push(currentFib);
//     currentFib = fibsGenerator.next().value;
//   }
//   return fibsSet.filter(isEven).reduce((acc, curr) => acc + curr, 0);
// };

const sumEvenFibs = (maxFib) => {
  let total = 0;
  let currentFib = 1;
  let previousFib = 1;

  while (currentFib < maxFib) {
    if (currentFib % 2 === 0) {
      total += currentFib;
    }
    const tempFib = currentFib;
    currentFib = currentFib + previousFib;
    previousFib = tempFib;
  }
  return total;
};

module.exports = sumEvenFibs;

// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 
// run through fib sequence
// check if each number in sequence is even or not, if it is even, add to total
// stop sequence if number in sequence is above maxFib
// return total