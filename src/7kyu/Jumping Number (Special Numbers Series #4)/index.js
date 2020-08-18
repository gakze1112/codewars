function jumpingNumber(n){
    if(n < 10) return "Jumping!!";
    
    let digits = n.toString().split(''),
        length = digits.length;
    for(let i=1; i<length; i++){
      if(Math.abs(+digits[i] - (+digits[i-1])) !== 1) return 'Not!!';
    }
    
    return 'Jumping!!';
  }

// 最佳解
function jumpingNumber(n){
    n.toString().split``.every((e,i,a) => i < 1 || Math.abs(e - a[i-1]) === 1) ? 'Jumping!!' : 'Not!!';
}