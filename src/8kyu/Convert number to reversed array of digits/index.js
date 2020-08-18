function digitize(n) {
    let digits = [];
    for(let i=n; i>0; i = Math.floor(i/10)) digits.push(i%10);
    return digits;
}