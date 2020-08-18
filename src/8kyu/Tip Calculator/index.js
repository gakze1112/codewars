function calculateTip(amount, rating) {
    let str = rating.toLowerCase(), r = -1;
    switch(str){
      case "excellent": r = 0.2; break;
      case "great": r = 0.15; break;
      case "good": r = 0.1; break;
      case "poor": r = 0.05; break;
      case "terrible": r = 0; break;
      default: break;
    }
  
    return (r === -1)? "Rating not recognised" : Math.ceil(amount*r);
}

// 優化版本 - 特色是 operator in 作為判斷式運用
const TIPS = {
    "terrible": 0,
    "poor": 0.05,
    "good": 0.1,
    "great": 0.15,
    "excellent": 0.2
};

function calculateTip(amount, rating) {
    rating = rating.toLowerCase();
    return (rating in TIPS)? "Rating not recognised" : Math.ceil(TIPS[rating]*amount);
}