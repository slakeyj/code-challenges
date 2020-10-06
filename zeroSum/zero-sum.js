// given an array of integers, print all sub-arrays with 0 sum

// array = [4, 2, -3, -1, 0, 4];
// subArrays = [
//     [-3, -1, 0, 4],
//      [0]
//   ]


const zeroSum = arr => {
  const subArrays = [];

  for (let start = 0; start < arr.length; start++) {
    let tempArray = [];
    let total = 0;
    for (let end = start; end < arr.length; end++) {
      tempArray.push(arr[end]);
      total += arr[end];
      if (total === 0) {
        subArrays.push(tempArray);
        tempArray = [];
      }
    }
  }
  return subArrays;
}

module.exports = zeroSum;