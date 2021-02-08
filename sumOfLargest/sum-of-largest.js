const sumOfLargest = arr => {
  // const sorted = arr.sort((a, b) => a - b)
  // return sorted[arr.length - 1] + sorted[arr.length - 2]
  const maxNum = Math.max(...arr);
  const integers = arr.filter(num => num !== maxNum);
  return maxNum + Math.max(...integers);
}

module.exports = sumOfLargest;