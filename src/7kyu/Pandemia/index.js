
function infected(s) {
    let map = s.split('X'),
        total = map.join('').length,
        infected = map.map(area => area.includes('1')? area.length : 0)
                      .reduce((a,b)=> a + b, 0);
    
    return total ? 100*(infected/total) : 0;
}

// 優化版
// 稍微快一點，但沒太大差別。
function infected(map) {
    let total = 0, infected = 0;
    map.split('X').forEach( area => {
        total += area.length;
        infected += /1/.test(area) ? area.length : 0;
    });

    return total ? 100*(infected/total) : 0;
}