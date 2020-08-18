function digital_root(n) {
    let sum = 0;
    while(n > 0){
      sum += n%10;
      n = Math.floor(n/10);
    }
    
    return sum > 10 ? digital_root(sum) : sum;
}

// 優化
// 數學 : n/9，取餘數。 餘數就是答案。
// 同餘定理
function digital_root(n) {
    return (n-1)%9 + 1;
}