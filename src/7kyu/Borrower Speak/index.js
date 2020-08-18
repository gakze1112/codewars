function borrow(s){
    let correct = s.match(/[a-zA-Z]/g);
    return correct ? correct.join('').toLowerCase() : '';
  }

// 優化解
function borrow(s){
    return s.toLowerCase().replace(/\W/g,'');
}