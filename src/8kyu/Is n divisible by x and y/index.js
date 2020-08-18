// n 可以被 x整除 , 也可以被 y整除
function isDivisible(n, x, y) {
    return ((n%x) === 0 && (n%y) === 0);
}