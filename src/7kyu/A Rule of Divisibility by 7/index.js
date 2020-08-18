// 最佳解
function seven(m) {
    var i = 0;
      while(m.toString().length>2){
        m=Math.floor(m/10)-(m%10)*2;
        i++;
      }  
    return [m, i];
}