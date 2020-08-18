Array.prototype.filter = function(fn){
  let arr = [];
  for(let value of this)
    if(fn(value)) arr.push(value);
    
  return arr;
}