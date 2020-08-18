
// ~~ : n > 0, 無條件捨去 (相當於 Math.floor())
// ~~ : n < 0, 無條件進位 (相當於 Math.ceil()) ex: Math.ceil(-2.999) ----> -2

// 
const sum = (number) => number.reduce((acc,value) => acc + value, 0);
function balancedNum(number)
{
  const digits = number.toString().split('').map( value => Number(value));
  
  // get the middle digits.
  const isEven = (digits.length%2 === 0)? true : false;
  const k = (isEven)? digits.length/2 : (digits.length-1)/2;
  const middle = (isEven)? [k-1 , k] : [k , k];

  // divide the digits into two groups.
  const left = digits.filter((v,i) => i < middle[0]);
  const right = digits.filter((v,i) => i > middle[1]);

  return sum(left) === sum(right) ? "Balanced" : "Not Balanced";
}

// 優化版
function balancedNum(number)
{
  let str = `${number}`,
      len = (str.length - (str.length % 2 ? -1 : -2)) / 2,
      sum = (digits) => [...digits].reduce((acc,value)=> acc + Number(value), 0);

  return sum(str.slice(0,len)) === sum(str.slice(-len)) ? "Balanced" : "Not Balanced";
}