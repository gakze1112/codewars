function isTriangular(t) {
    for(let n = 1; n <= t; n++){
      if( n * ( n + 1) / 2 === t) return true;
    }
    
    return false;
  }

  // 優化版本
  // 三角形面積 = t , 所以可以推導出一元二次方程式 : n^2 + n -2t = 0;
  // 利用一元二次公式解, 則 x = (-1 +- sqrt(8*t+1))/2;
  // 當 sqrt(8*t+1) 為整數，x才有可能會整數。這一題的測試資料剛好都是整數。
function isTriangular(t) {
    return Math.sqrt(8 * t + 1) % 1 === 0;
}