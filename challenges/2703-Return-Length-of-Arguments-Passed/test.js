const argumentsLength = require('./index');

test('returns the correct length of arguments passed', () => {
  expect(argumentsLength(1, 2, 3)).toBe(3);
  expect(argumentsLength('a', 'b')).toBe(2);
  expect(argumentsLength()).toBe(0);
  expect(argumentsLength(null, undefined, false)).toBe(3);
  expect(argumentsLength({})).toBe(1);
});