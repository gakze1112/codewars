function minSum(arr) {
    let middle = arr.length/2,
        list = arr.sort((a,b)=> a - b),
        a = list.slice(0,middle),
        b = list.slice(middle, arr.length).reverse();
    
    let length = a.length,
        sum = 0;
        
    for(let i=0; i<length; i++)
      sum += a[i] * b[i];
      
    return sum;
  }

// 最佳解
function minSum(arr) {
    return arr.sort( (a,b) => a-b )
              .slice(0, arr.length/2)
              .reduce( (acc,curr,index) => acc += curr * arr[ arr.length - index - 1 ], 0 )
  }