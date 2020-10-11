const equalsZero = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let addedValues = arr[i] + arr[j]
      if (arr.includes(-addedValues)) {
        return true;
      }
    }
  }
  return false;
}

module.exports = equalsZero