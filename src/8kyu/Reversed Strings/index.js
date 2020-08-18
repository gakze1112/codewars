function solution(str){
    let arr = [];
    for(let i=str.length-1; i>=0; i--) arr.push(str[i]);
    return arr.join('');
}

// 其他解
function solution(str){
    // String.prototype.split ---> return a Array.
    return str.split('').reverse().join('');
}