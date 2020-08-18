/*
  p : 列舉的質因數
  k : 質因數的次方
  res : 標準分解式
*/
function primeFactors(n){
  let res = '';
  for(let p = 2, k = 0; n > 1; p++, k = 0){
    while(n%p === 0) { k++; n /= p; }

    if(k > 0) res += (k === 1) ? `(${p})` : `(${p}**${k})`;
  }

  return res;
}

//console.log(primeFactors(7775460));
console.log(primeFactors(86240));