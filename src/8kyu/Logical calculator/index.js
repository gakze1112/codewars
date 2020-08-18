function logicalCalc(array, op){
    if(array.length < 2) return array[0];
    
    let res = array[0];
    for(let i = 1; i < array.length; i++){
      switch(op){
        case 'AND':
          res = res & array[i]; break;
          
        case 'OR':
          res = res | array[i]; break;
          
        case 'XOR':
          res = res ^ array[i]; break;
          
        default: break;
      }
    }
    
    return res === 1;
  }


// 其他解
// 個人認為 很厲害的寫法 ---- 利用 call-back function 來傳遞 運算子。
const ops = {
    'AND' : (a,b) => a && b,
    'OR'  : (a,b) => a || b,
    'XOR' : (a,b) => a !== b
};

function logicalCalc(array, op){
    return array.reduce(ops[op]);
}

console.log(logicalCalc([true, true, true, false], "AND"));