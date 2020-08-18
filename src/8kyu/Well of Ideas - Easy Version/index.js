function well(x){
    let good = x.filter( value => value === 'good' );
    let n = good.length;
    
    switch(n){
      case 0 : return 'Fail!';
      case 1:case 2: return 'Publish!';
      default: return 'I smell a series!';
    }
}

// 最佳化
function well(x){
    let n = x.filter( value => value === 'good' ).length;
    switch(n){
      case 0 : return 'Fail!';
      case 1:case 2: return 'Publish!';
      default: return 'I smell a series!';
    }
}