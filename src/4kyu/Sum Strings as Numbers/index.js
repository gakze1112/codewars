function sumStrings(a,b) {
    let d = Math.max(a.length, b.length) + 1,
        carry = 0,
        sum = [];

    a = a.padStart(d, '0').split('');
    b = b.padStart(d, '0').split('');

    for(let i = d - 1; i >= 0; i--){
      let temp = ~~a.pop() + ~~b.pop() + carry;
      
      sum.unshift(temp%10);
      carry = (temp >= 10) ? 1 : 0;
    }
    
    return sum.join('').replace(/^0+/,'');
}