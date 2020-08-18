function makeNegative(num) {
    return (num < 0) ? num : (0-num);
}

// 其他解
function makeNegative(num) {
    return -Math.abs(num);
}