function maxGap (numbers){
    let sorted = numbers.sort((a,b)=> a - b ),
        length = numbers.length - 1,
        max = 0;
    
    for(let i = 0; i < length; i++){
      let current = Math.abs(sorted[i] - sorted[i + 1]);
      if(current > max) max = current;
    }
    
    return max;
  }