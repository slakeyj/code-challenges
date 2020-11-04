const climbStairs = n => {
  let prevNum = 0;
  let currNum = 1;
  let temp = 0;
  for (let i = 0; i < n; i++) {
    temp = currNum;
    currNum = currNum + prevNum;
    prevNum = temp;
  }
  return currNum;
};

module.exports = climbStairs;