function zeros(n){
    let res = 0;
    for(let i = 1; 5 ** i <= n; i++){
        res += Math.floor(n / (5 ** i)); 
    }
    return res;
}

console.log(zeros(10));