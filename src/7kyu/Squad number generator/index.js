function generateNumber(squad, n){
  if(!squad.includes(n)) return n;
  
  for(let a = 1; a < 10; a++){
    let b = n - a,
        current = 10 * a + b;

    if(0 < b && b < 10 && !squad.includes(current)) return current;
  }

  return null;
}
console.log(generateNumber([1,2,3,4,6,9,10,11,15,29,69], 11));