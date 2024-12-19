// Example function to test with
const sum = (a, b, c) => a + b + c;

// Import your implementation of `once`
const once = require('./index');

test('Once function allows one call to the function', () => {
    const onceFn = once(sum);
    expect(onceFn(1, 2, 3)).toBe(6); // First call, should return 6
    expect(onceFn(4, 5, 6)).toBe(undefined); // Subsequent call, should return undefined
});

test('Works with different input functions', () => {
    const product = (a, b, c) => a * b * c;
    const onceFn = once(product);
    expect(onceFn(2, 3, 4)).toBe(24); // First call, should return 24
    expect(onceFn(5, 6, 7)).toBe(undefined); // Subsequent call, should return undefined
});

test('Handles zero arguments', () => {
    const noArgs = () => 'Hello, world!';
    const onceFn = once(noArgs);
    expect(onceFn()).toBe('Hello, world!'); // First call, should return 'Hello, world!'
    expect(onceFn()).toBe(undefined); // Subsequent call, should return undefined
});

test('Handles functions with side effects', () => {
    let counter = 0;
    const increment = () => ++counter;

    const onceFn = once(increment);
    expect(onceFn()).toBe(1); // First call, counter is incremented to 1
    expect(onceFn()).toBe(undefined); // Subsequent call, counter is NOT incremented
    expect(counter).toBe(1); // Ensure counter stays at 1
});

test('Handles calling without arguments', () => {
    const constant = () => 42;
    const onceFn = once(constant);
    expect(onceFn()).toBe(42); // First call, returns 42
    expect(onceFn()).toBe(undefined); // Subsequent call, returns undefined
});

test('Handles multiple once functions independently', () => {
    const add = (a, b) => a + b;
    const multiply = (a, b) => a * b;

    const onceAdd = once(add);
    const onceMultiply = once(multiply);

    expect(onceAdd(2, 3)).toBe(5); // First call, add is called
    expect(onceAdd(4, 5)).toBe(undefined); // Subsequent call, add is NOT called

    expect(onceMultiply(2, 3)).toBe(6); // First call, multiply is called
    expect(onceMultiply(4, 5)).toBe(undefined); // Subsequent call, multiply is NOT called
});
