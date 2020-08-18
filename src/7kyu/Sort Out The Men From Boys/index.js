function menFromBoys(arr){
    let evens = [], odds = [];
    [...new Set(arr)].forEach(n => n%2 ? odds.push(n) : evens.push(n));
    
    evens.sort((a,b) => a - b);
    odds.sort((a,b) => b - a);
    
    return evens.concat(odds);
  }