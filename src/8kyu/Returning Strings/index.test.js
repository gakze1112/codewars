/// <reference types="jest" />
// src
const greeting = require('./index');

// 應該試著引用 eslint jest 才對 ，需要有 jest 自動補足
/*
    好的測試案例原則
        1. 良好的命名，必須能夠具體知道測試的內容‧
            - 測試目標
            - 做了什麼?
            - 期望什麼?
           
        2. 好的內容，遵循 3A 原則
            - Arrange 準備
            - Act 執行
            - Asset 驗證
        
    測試案例練習

*/

describe('Returning Strings', () => {
    // test 描述測試目標
    test('return a string "Hello, <name> how are you doing today?"', () => {
        /*
            // Arrange : 準備好期望的結果
            const expected = "Hello, John how are you doing today?";

            // Act : 代入 'John' 執行 greeting ‧
            const actual = greeting('John');

            // Assert : 驗證階段
            expect(actual).toBe(expected);
        */

        // 依據 3A 原則的代碼，簡化排版後的版本:
        expect(greeting('John')).toBe('Hello, John how are you doing today?');
        expect(greeting('Alice')).toBe('Hello, Alice how are you doing today?');
    });
});
