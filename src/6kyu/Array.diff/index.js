function array_diff(a, b) {
    for(let x of b){
      for(let i = 0; i < a.length; i++){
        while(a[i] === x) a.splice(i,1);
      }
    }
    
    return a;
}

// 簡化
function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
}