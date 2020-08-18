function getDivisorsCnt(n){
    let count = 1;
    for(let i=2; i<=n; i++){
      if(n%i === 0) count++;
    }
    
    return count;
}