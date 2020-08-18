/*
  浮點數運算 - 有效位丟失 (Loss of significance)
    這是指 

  參考資料 : 
  https://en.wikipedia.org/wiki/Loss_of_significance
  https://melonqi.github.io/2019/01/30/float/

  // 為了消除有效位丟失的狀況，公式解 - 修正 :
  x1 = (-b -sqrt(b^2 -4ac)) / 2a,
  x2 = c / a(x1);
*/

function quadratic(a, b, c) {
  let x1 = (-b -Math.sqrt(b ** 2 - 4*a*c))/(2*a),
      x2 = c/(a*x1);

  return x2;
}


// 優化後
function quadratic(a, b, c) {
  return 2*c / (-b - Math.sqrt(b ** 2 - 4*a*c));
}