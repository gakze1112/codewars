// 這一題要找倍數。
function multipleOfIndex(array) {
    return array.filter( (value,index) => value%index === 0 );
}