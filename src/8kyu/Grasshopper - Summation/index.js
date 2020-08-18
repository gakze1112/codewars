// 迴圈
var summation = function (num) {
    let sum = 0;
    for(let i=1; i<=num; i++) sum += i;
    return sum;
}

// 其他解 - 遞迴練習
// 效能 : 13 ms
var summation = function (num) {
    return (num === 1) ? 1 : num + summation(num-1);
}

// 最佳解 - 公式解
// 效能 : 9 ms
var summation = function (num) {
    return (num === 1) ? 1 : num + summation(num-1);
}