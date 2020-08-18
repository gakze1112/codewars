// 效能 : O(n)
function nthEven(n){
    let even = 0;
    for(let i=1; i<n; i++) even = 2*i;
    return even;
}

// 最佳解
// 效能 : O(1)
function nthEven(n){
    return (n === 1) ? 0 : 2*n-2;
}