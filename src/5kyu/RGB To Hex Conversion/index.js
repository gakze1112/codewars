
// 最佳化
const toHex = (n) => {
    if(n < 0) return '00';
    if(n > 255) return 'FF';
    
    return ('0' + n.toString(16).toUpperCase()).slice(-2);
  };
  
function rgb(r, g, b){
    return toHex(r) + toHex(g) + toHex(b);
}

