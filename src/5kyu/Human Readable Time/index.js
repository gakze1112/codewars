// 字串標準化的技巧 : 統一補零，再從陣列尾端倒取需要的位數。
function toString(n){
    return ('0' + n.toString()).slice(-2);
  }
  
function humanReadable(seconds) {
    let sec = toString( seconds % 60 ),
        min = toString( Math.floor(seconds / 60) % 60 ),
        hour = toString( Math.floor(seconds / 3600) );
        
    return `${hour}:${min}:${sec}`;
}