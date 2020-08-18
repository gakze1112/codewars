function sumOfDifferences(arr) {
    if(arr.length < 2) return 0;
    
    let max = arr.length;
    for(let i=0; i<max; i++){
      for(let j=i+1; j<max; j++){
        if(arr[i]<arr[j]){
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    
    // 加總
    let sum = 0;
    for(let i=0; i<max-1; i++){
      let a = arr[i];
      let b = arr[i+1];
      sum += a-b;
    }
    
    return sum;
  }

// 簡化後
function sumOfDifferences(arr) {
    return (arr.length > 1) ? Math.max(...arr) - Math.min(...arr) : 0;
}