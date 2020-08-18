function productArray(numbers){
    return numbers.map((current,i,arr)=>{
      return arr.filter((val, j) => j !== i)
                .reduce((product, val) => product * val, 1);
    });
}

// 優化
function productArray(numbers){
    return numbers.map(x => numbers.reduce((a,b) => a * b, 1) / x);
}