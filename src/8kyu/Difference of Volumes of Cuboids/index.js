function find_difference(a, b) {
    return Math.abs(a[0]*a[1]*a[2] - b[0]*b[1]*b[2]);
}

// 最佳解
function find_difference([a,b,c], [d,e,f]) {
    return Math.abs(a*b*c - d*e*f);
}