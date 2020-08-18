function divCon(x){
    return x.map(value => (typeof value === 'string')? -value:+value).reduce((sum,value) => sum + value, 0);
}

// 最佳解
function divCon(x){
    return x.reduce((sum, current)=> {
        return typeof current === 'string'? sum - Number(current) : sum + current;
    }, 0);
}