function checkParity(parity, bin){
    const goal = {
      'even': 0,
      'odd' : 1
    };
    
    let n = bin.match(/1/g).length & 1;
    return (n === goal[parity])? 0 : 1;
}