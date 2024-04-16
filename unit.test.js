const { sumFunction } = require('./utils');

describe('sum function', () => {
  test('when given value1 and value2, it should return the sum of these two values', () => {
    expect(sumFunction(1, 2)).toEqual(5);
  });
});
