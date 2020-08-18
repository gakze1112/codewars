
// for..of ---> 擷取陣列元素的 value。
// for...in --> 擷取陣列元素的 index
const compSame = (a,b) => {
  let length = a.length;
  
  for(let i = 0; i < length; i++){
    if(a[i] !== b[i]) return false;
  }

  return true;
}

function comp(array1, array2){
    /*
       if(null)       ==> false
       if(undefined)  ==> false
       if(0)          ==> false
    */
    if(!array1 || !array2) return false;
    
    array1.sort((a,b) => a - b);
    array2.sort((a,b) => a - b);
    
    return compSame(array1.map(val => val ** 2), array2);
}


// 寫法簡化版
function comp(a1, a2){
  /*
     if(null)       ==> false
     if(undefined)  ==> false
     if(0)          ==> false
  */
  if(!a1 || !a2) return false;
  
  a1.sort((a,b) => a - b);
  a2.sort((a,b) => a - b);
  
  for(let i in a1){
    if(a1[i] ** 2 !== a2[i]) return false;
  }

  return true;
}