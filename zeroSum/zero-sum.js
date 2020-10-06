// given an array of integers, print all sub-arrays with 0 sum

// Input: array = [4, 2, -3, -1, 0, 4];
// Output: subArrays = [
//     [-3, -1, 0, 4],
//      [0]
//   ]

const sumArray = (numbers) => numbers.reduce((sum, current) => sum + current);

// declarative > imperative

const zeroSum = arr => {
  const subArrays = [];

  for (let start = 0; start < arr.length; start++) {
    for (let end = start; end < arr.length; end++) {
      const subArray = arr.slice(start, end + 1);
      const sum = sumArray(subArray);
      if (sum === 0) {
        subArrays.push(subArray);
      }
    }
  }
  return subArrays;
}

module.exports = zeroSum;