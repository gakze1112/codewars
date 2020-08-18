
function expressionMatter(a, b, c) {
    let numers = [(a+b+c),(a+b*c),(a*b+c),(a*b*c),((a+b)*c),(a*(b+c))];

    let max = 0;
    for(n of numbers){
        if(n > max) max = n;
    }

    return max;
}

// 優化版本 - 速度稍微快一點 
function expressionMatter(a, b, c) {
    return Math.max(
        a+b+c,
        a+b*c,
        a*b+c,
        a*b*c,
        (a+b)*c,
        a*(b+c)
    );
}