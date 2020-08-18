function squaresNeeded(grains){
  if(grains === 0) return 0;

  // if n > 0, grains <= 2^n - 1;
  let k = grains + 1;
  let binary = k.toString(2).split('');
  
  return (binary.reverse().filter(v => +v).length === 1)? binary.length - 1 : binary.length;
}

// 最佳解
function squaresNeeded(grains){
  return Math.ceil(Math.log2(grains+1))
}