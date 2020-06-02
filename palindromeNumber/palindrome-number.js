const isPalindrome = integer => {
  if (integer < 0) {
    return false
  }
  let newNum = 0;
  let oldNum = integer;
  let length = oldNum.toString().length;

  while (oldNum !== 0) {
    newNum += (oldNum % 10) * (10 ** (length - 1));
    oldNum = Math.floor(oldNum / 10);
    length--;
  }

  return newNum === integer;
}

module.exports = isPalindrome;