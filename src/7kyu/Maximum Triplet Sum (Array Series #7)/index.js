function maxTriSum(numbers){
    numbers.sort((a,b) => b - a);
    
    let sequence = new Set(numbers).values(),
        max = 0;
        
    for(let i = 0; i < 3; i++){
      max += sequence.next().value;
    }
    
    return max;
}

// 簡化寫法
function maxTriSum(numbers){
    numbers.sort((a,b) => b - a);  
    const [a,b,c,...rest] = [...new Set(numbers).values()];
    return a + b + c;
}