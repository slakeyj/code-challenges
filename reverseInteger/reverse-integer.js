const low = Math.pow(-2, 31);
const high = Math.pow(2, 31) - 1;

const reverse = integer => {
  let array = integer.toString().split('').reverse();

  if (array[array.length - 1] === '-') {
    let negative = array.pop();
    array.unshift(negative);
  }

  integer = parseInt(array.join(''));
  if (integer >= low && integer <= high) {
    return integer;
  }
  return 0;
}

module.exports = reverse;
