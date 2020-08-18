function testit(n){
    let arr = [];
    for(let i = 1; i <= n; i += 2){
      if(n%i === 0) arr.push(i);
    }

    return arr;
}