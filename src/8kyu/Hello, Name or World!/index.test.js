// Jest 練習 + BDD 練習
const sayHello = require('./index');

// describe 代表一個測試點
// 若現在已經存在許多個測試檔案，但是想要執行某一個測試 ---> jest -t '<describe>'
// 例如: jest -t 'Hello, Name or World!'
describe('Hello, Name or World!', () => {
    test('say hello to the one', () => {
        expect(sayHello('John')).toBe('Hello, John!');
        expect(sayHello('john')).toBe('Hello, John!');
        expect(sayHello('aliCE')).toBe('Hello, Alice!');
        expect(sayHello()).toBe('Hello, World!');
        expect(sayHello('')).toBe('Hello, World!');
    });
});