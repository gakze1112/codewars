function between(a, b) {
    if(a < b){
      let integers = [];
      for(let i=a; i<=b; i++) integers.push(i);
      return integers;
    }
}

// 優化版本 --- 省略 if 
// 原因: 這一題給定的測試資料都會符合 a < b的狀況，所以 if(a < b) 可以省略
function between(a, b) {
    let integers = [];
    for(let i=a; i<=b; i++) integers.push(i);
    return integers;
}