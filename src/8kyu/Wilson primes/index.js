function amIWilson(p) {
    let k = 1;
    for(let i=1; i<p; i++) k *= i;
    
    let wilsonPrime = (k+1) / (p*p);
    return (wilsonPrime%1 === 0)? true : false;
}

// 簡化
function fact(n){
  let result = 1;
  for(let i=1; i<=n; i++) result *= i;
  return result;
}

function amIWilson(p) {
  return (fact(p-1) + 1) / (p*p) % 1 === 0 ? true : false;
}