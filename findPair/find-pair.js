// given an unsorted array of integers, find a pair with a given sum in it

// example:
// Input:
// arr = [8, 7, 2, 5, 3, 1]
// sum = 10
// Output:
// Pair found at index 0 and 2 (8 + 2)
// or
// Pair found at index 1 and 4 ( 7 + 3)

const findPair = (arr, sum) => {
  let arrSums = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      arrSums = arr[i] + arr[j];
      console.log('in here', arrSums)
      if (arrSums === sum) {

        return [i, j];

      }
    }
  }
}

module.exports = findPair;