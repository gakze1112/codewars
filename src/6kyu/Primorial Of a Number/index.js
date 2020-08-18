// 計算效能
// 應該是 O(log n) 因為實務上 第一個 upperBound只會列舉到 Math.sqrt(30031);
function numPrimorial(n){
    const upperBound = 30031, 
          isPrime = Array.from({ length: upperBound }).fill(true);

    let prod = 1,
        count = 0;

    for(let i = 2; i < upperBound && count !== n; i++){
        if(isPrime[i]){
            for(let j = i ** 2; j < upperBound ; j += i) isPrime[j] = false;
            
            prod *= i;
            count++;
        }
    }

    return prod;
}

console.log(numPrimorial(15));