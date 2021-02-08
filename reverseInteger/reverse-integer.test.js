const { reverse, reverseAsString } = require('./reverse-integer');

describe.each([reverse, reverseAsString])('reverseInteger()', func => {
  it('reverses a positive integer', () => {
    expect(func(123)).toEqual(321);
  });

  it('reverses a negative integer', () => {
    expect(func(-123)).toEqual(-321);
  });

  it('removes a leading 0', () => {
    expect(func(120)).toEqual(21);
  });

  it.each([Math.pow(-2, 33), Math.pow(2, 33)])(
    'returns 0 when a number is not within the correct range',
    input => {
      expect(func(input)).toEqual(0);
    }
  );
});
