function integrate(coefficient, exponent) {
    let a = exponent + 1;
    let b = coefficient / a;
    
    return ''.concat(b,'x^',a);
}

// 最佳解
function integrate(coefficient, exponent) {
  return coefficient / (exponent + 1) + 'x^' + (exponent + 1);
}