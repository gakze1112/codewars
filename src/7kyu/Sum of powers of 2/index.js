
// 查表法
const powers = n => {
    let pow = [];
    for(let i=0; i<=53; i++) pow.push(Math.pow(2,i));
    
    let res = [];
    while(n >= 1){
      let i = pow.findIndex( value => value > n) - 1;
      res.push(pow[i]);
      n -= pow[i];
    }
    
    return res.reverse();
};

// 其他解
/*
    n.toString(2) ----> 轉換為 2進位的字串
    .split`` ----> 這個我看不懂
*/
const powers = n => {
    return n.toString(2)
            .split``
            .reverse()
            .map((v,i) => +v ? 2 ** i : 0)
            .filter(v => v)
};

console.log(powers(9007199254740991));