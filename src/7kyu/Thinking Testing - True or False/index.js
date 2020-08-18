function testit(n){
    let str = n.toString(2).match(/1/g);
    return str !== null ? str.length : 0;
}

// 優化版本
function testit(n){
    return n.toString(2).replace(/0/g,'').length;
}