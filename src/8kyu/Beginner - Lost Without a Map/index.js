// 使用內建的 function: map
/*
  Basic test : 5 ms
  Random tests : 20 ms
*/
function maps(x){
    return x.map( value =>{ return value*2; });
}

// 不使用內建 function
/*
  Basic test : 4 ms
  Random tests : 22 ms
*/
function maps(x){
  let res = [];

  for(n of x){
    let value = n*2;
    res.push(value);
  }

  return res;
}