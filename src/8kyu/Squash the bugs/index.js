// 依據題目給定的答案，做最小幅度的變更。
function findLongest(str) {
  
    var spl = str.split(" "), longest = 0;
    
    for (var i = 0; i < spl.length; i++){
      if (spl[i].length > longest) {
        longest = spl[i].length;
      }
    }
    
    return longest;
}

// 優化版本 - 大幅度變更。
function findLongest(str) {
    const spl = str.split(" ");
    
    let longest = 0;
    for(word of spl){
        if(word.length > longest) longest = s.length;
    } 
    
    return longest;
}