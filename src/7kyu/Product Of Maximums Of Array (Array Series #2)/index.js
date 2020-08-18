function maxProduct(numbers, size){
    return numbers.sort((a,b) => a - b)
                  .slice(-size)
                  .reduce((a,b)=> a * b ,1);
}