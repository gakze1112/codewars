function longestConsec(strarr, k) {
    if(strarr.length === 0 || k>strarr.length ||  k<=0 ) return "";
  
    let longestStr = "", indexMax = strarr.length-k+1;
    for(let index=0; index<indexMax; index++){
      let start = index , end = index + k , str = "";
      str = strarr.slice(index,end).join("");
      
      if(str.length > longestStr.length)  longestStr = str;
    }
    
    return longestStr;
  }