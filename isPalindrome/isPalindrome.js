const isPalindrome = suspect => {
  let start = 0;
  let end = suspect.length - 1;
  while (start < end) {
    if (suspect[start] !== suspect[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

module.exports = isPalindrome;


