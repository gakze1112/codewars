function strong(n) {
    let sum = n.toString()
               .split('')
               .reduce((acc,value)=>{
                  let product = 1;
                  for(let i=1; i<=value; i++) product *=i;
                  return acc + product;
                },0);
    
    return (sum === n)? "STRONG!!!!" : "Not Strong !!" ;
}

// 好像可以用 Array.from({length:i}); 指定元素個數，創建陣列。 