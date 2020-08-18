// 試著劃出矩陣，並且算對角線加總就知道規律了。
// 效能 O(1);
function game(n) {
    if(n === 1) return [1,2];
    
    return (n%2 === 0) ? [(n ** 2) / 2] : [n ** 2, 2];
}

// 簡化版
function game(n) {
    return n === 1 ? [1,2] :
           n%2 ? [n ** 2, 2] : [n ** 2 / 2];
}