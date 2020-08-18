function rowSumOddNumbers(n) {
    // get the table of odd numbers
    let max = n*(n+1)/2-1, odds = [1];
    for(let i=0; i<max; i++){
      let nextOdd = odds[i] + 2;
      odds.push(nextOdd);
    }
    
    return odds.reverse().filter((value,index) => index < n).reduce((sum,value) => sum + value,0);
}

// 最佳解
function rowSumOddNumbers(n) {
    return Math.pow(n,3);
}