const sumOfTwoLargest = arr => {
  const [num1 = 0, num2 = 0] = [...arr].sort((a, b) => b - a)
  return num1 + num2
}

module.exports = sumOfTwoLargest;


// [2, 3] -> [3, 2]

// (a, b) => b - a

// return the sum of the 2 largest integers in an array