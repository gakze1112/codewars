function maxMultiple(divisor, bound){
    return divisor * Math.floor(bound / divisor);
}

// 最佳解
function maxMultiple(divisor, bound){
    return bound - bound%divisor;
}