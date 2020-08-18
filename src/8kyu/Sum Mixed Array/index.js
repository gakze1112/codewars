// string 轉 number 有效能問題。 parseInt 較 Number() 以及 + 慢
function sumMix(x){
    let sum = 0;
    for(let elem of x){
      sum += (Number.isInteger(elem))? elem : parseInt(elem);
    }
    return sum;
}

// 另外解 + 效能最佳化 - reduce
function sumMix(x){
  return x.map( n => +a ).reduce((sum, n) => sum + n);
}