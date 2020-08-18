/*
    已滿足的條件 :
        1. min < max
        2. step > 0
*/
function generateRange(min, max, step){
    let integers = [];
    for(let i=min; i<=max; i+=step) integers.push(i);
    return integers;
}