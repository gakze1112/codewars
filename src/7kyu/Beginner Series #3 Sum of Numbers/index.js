function getSum( a,b )
{
  let start = (b>a)? a : b,
      end = (b>a)? b:a,
      sum = 0;
      
  for(let i=start; i<=end; i++) sum += i;
  return sum;
}

// 優化版 - 等差級數求和公式
// 脫離學生太久，都忘了
function getSum()
{
  let min = Math.min(a,b),
      max = Math.max(a,b);
  return (max - min + 1)*(min + max)/2;
}