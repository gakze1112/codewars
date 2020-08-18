/// <reference types="jest" />
const greet = require('./index');

test('show a string, "hello world!".', () => {
    expect(greet()).toBe('hello world!');
});