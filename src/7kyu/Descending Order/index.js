function descendingOrder(n){
  if(n === 0) return 0;
  
  let digits = [];
  while(n>0){
    digits.push(n%10);
    n = parseInt(n/10);
  }
  
  for(let i=0; i<digits.length; i++){
    for(let j=0; j<digits.length; j++){
      if(digits[j] > digits[i]){
        let temp = digits[i];
        digits[i] = digits[j];
        digits[j] = temp;
      }
    }
  }
  
  let current = 0;
  for(let i=0; i<digits.length; i++){
    current += digits[i] * Math.pow(10,i);
  }
  
  return current;
}