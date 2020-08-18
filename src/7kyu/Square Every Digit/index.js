// 1. 將數字轉換成字串後，將每個數字分割成單一字元。
// 2. 將每個字元轉換回數字，進行平方。
function squareDigits(num){
    return +(''.concat(num).split('').map( val => Math.pow(+val,2)).join(''));
}

// 純粹數字處理 ---> 果然非最佳解
function squareDigits(num){
    
    let digits = [];
    for(let n = num; n>0; n = Math.floor(n/10)) digits.push(n%10);
    return digits.reverse().map( val => val*val).join('');
}