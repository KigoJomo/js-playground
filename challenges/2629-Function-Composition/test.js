const compose = require('./index');

test('Example 1: functions = [x => x + 1, x => 2 * x], x = 4', () => {
    const functions = [x => x + 1, x => 2 * x];
    const fn = compose(functions);
    expect(fn(4)).toBe(9);
});

test('Example 2: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1', () => {
    const functions = [x => 10 * x, x => 10 * x, x => 10 * x];
    const fn = compose(functions);
    expect(fn(1)).toBe(1000);
});

test('Example 3: functions = [], x = 42', () => {
    const functions = [];
    const fn = compose(functions);
    expect(fn(42)).toBe(42);
});
