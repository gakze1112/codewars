function fusc(n){
    if(n === 0 || n === 1)  return n;

    let isOdd = n&1,
        k = isOdd ? (n-1)/2 : n/2;

    return isOdd ? fusc(k) + fusc(k+1) : fusc(k);
}

// 優化版 利用位元運算
function fusc(n){
    if(n < 2) return n;
    if(n & 1) return fusc(n >> 1) + fusc((n >> 1) + 1);
    return fusc(n >> 1);
}