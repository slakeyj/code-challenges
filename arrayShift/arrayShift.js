// Take an existing array and insert a given number into the middle of that array.


const arrayShift = (array, number) => {
  if (!array.length) {
    return [number]
  }
  if (array.length === 1) {
    array.push(number);
    return array;
  }
  let midPoint = findMid(array);
  console.log('mid', midPoint)
  let temp = number

  let previous = 0;
  for (let i = midPoint; i < array.length; i++) {
    previous = array[i];
    array[i] = temp;
    temp = previous;
  }
  array.push(temp);
  console.log('array', array)
  return array;

}

const findMid = array => {
  // console.log(array.length)
  // if (array.length % 2 === 0) {
  //   return (array.length / 2)
  // }
  return Math.ceil(array.length / 2);

}

module.exports = arrayShift;