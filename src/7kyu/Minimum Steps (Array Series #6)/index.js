// 效能 : O(2n)
function minimumSteps(numbers, value){
    let count = -1,
        sum = 0;
    
    numbers.sort((a,b) => a - b);
    
    for(let x of numbers){
      if(sum >= value) break;
      
      sum += x;
      count++;
    }
    
    return count;
}

// 其他解
// 效能 : O(2n)
function minimumSteps(numbers, value){
    return numbers.sort((a,b)=> a - b)
                  .filter(e => (value = value - e) > 0)
                  .length;
}