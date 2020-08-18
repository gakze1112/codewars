
// 第一次寫 code 
function findMultiples(integer, limit) {
    if(integer <= 0 || limit <= 0 || limit < integer) return ;
  
    return new Array(Math.floor(limit / integer))
            .fill(integer)
            .map( (value, index) => value * (index + 1));
  }

// 最佳解
function findMultiples(integer, limit) {
    // ~~ 表示取整數; Array() ----> 不確定，猜測是建立新的空陣列 類似 new Array ?
    return [...Array(~~(limit / integer))].map((_,index) => integer * (index+1));
}