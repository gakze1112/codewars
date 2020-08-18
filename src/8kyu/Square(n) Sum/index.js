function squareSum(numbers){
    let sum = 0;
    for(let n of numbers) sum += n*n;
    
    return sum;
}

// 其他解 -- array.reduce 練習
// [注意] reduce 結合的時候，容易產生 所有元素被移除，導致初始值為空的狀況。
function squareSum(numbers){
    return numbers.reduce((sum,value) => sum + Math.pow(value,2),0);
}