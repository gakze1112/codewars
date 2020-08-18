const isInteger = (n) => {
    return n%1 === 0;
  }
  
  function horses(n) {
    if(!isInteger(n)) return undefined;
    if(n < 3) return n;
    
    let result = n*(n-1)*(n-2);
    return isInteger(result)? result : undefined;
  }

// 最佳解
function horses(n) {
    if (Number.isInteger(n)) return n<3 ? n : n*(n-1)*(n-2);
}