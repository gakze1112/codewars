function getMiddle(s)
{
  let start = (s.length%2) ? (s.length - 1)/2 : s.length / 2 - 1,
      end = (s.length%2) ? start + 1 : start + 2;
      
  return s.slice(start,end);
}

// 優化版
function getMiddle(s){
    return s.slice(Math.ceil(s.length / 2 - 1), s.length%2 ? start + 1 : start + 2);
}
// 如果取最小整數呢?
// ceil(s.length/2 - 1);