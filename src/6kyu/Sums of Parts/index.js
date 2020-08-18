// 效能 : O(n)
function partsSums(ls) {
    let sum = [0],
        i = 0;
    
    ls.reverse().forEach(val =>{
      sum.push(sum[i] + val);
      i++;
    });
    
    return sum.reverse();
}

// 優化版
function partsSums(ls) {
    let sum = [0];
    for(let i in ls.reverse()){
        sum.push(sum[i] + ls[i]);
    }

    return sum.reverse();
}

// 其他解 ---> 這個最快。
function partsSums(ls) {
    ls.unshift(0);
    let sum = ls.reduce((p, c) => p + c, 0);
    return ls.map(v => sum = sum - v);
}