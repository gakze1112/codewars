function add(x, y)
{
  while(y !== 0){
    let temp = x ^ y;
    y = (x & y) << 1;
    x = temp;
  }
  
  return x
}

console.log(add(11,3));