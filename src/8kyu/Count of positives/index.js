
// 利用 Array.isArray 來判斷 input ，原因是 input 有可能為 null or undefined.
function countPositivesSumNegatives(input) {
    if(!Array.isArray(input) || input.length === 0) return [];
    
    let count = 0, sum= 0;
    for(let n of input){
      if(n > 0) count++;
      else if(n < 0) sum += n;
    }
    
    return [count,sum];
}

// 其他解 ---> 聰明解 但是可讀性差
function countPositivesSumNegatives(input) {
    return (input && input.length)? [input.filter( p => p > 0).length, input.filter( p => p < 0).reduce( (sum,element) => sum + element,0)] : [];
}

// 其他解 ---> 聰明解 可讀性高的寫法
function countPositivesSumNegatives(input) {
    if(input && input.length){
        let count = input.filter( p => p > 0).length;
        let sum = input.filter( p => p < 0).reduce( (sum,element) => sum + element,0);

        return [count,sum];
    }

    return [];
}