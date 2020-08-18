// 第一次解法
function century(year) {
    if(year <= 100) return 1;
    let century = Math.floor(year/100);
    return (year%100)? century+=1: century;
}

// 換個寫法 - 最佳解
// 因為 ceil 會回傳大於或等於的最小整數，就是無條件進位
function century(year) {
    return Math.ceil(year/100);
}