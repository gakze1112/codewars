function take(arr, n) {
    return arr.filter((value,index) => index < n );
}

// 其他方法
function take(arr, n) {
    return arr.slice(0, n);
}