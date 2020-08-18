var arrayLeaders = numbers => {
    let leaders = [],
        totalRightSide = 0;
        
    for(let i = numbers.length - 1; i >= 0; i--){
      if(numbers[i] > totalRightSide) leaders.push(numbers[i]);
      totalRightSide += numbers[i];
    }
    
    return leaders.reverse();
  }