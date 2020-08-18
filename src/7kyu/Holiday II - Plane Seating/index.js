const convertEndString = (char) => {
    return  /[abc]/i.test(char) ? 'Left'  :
            /[def]/i.test(char) ? 'Middle':
            /[ghk]/i.test(char) ? 'Right' : null;
  };
  
  const convertFrontString = (n) => {
    return  n <= 0 || n > 60 ? null :
            n <= 20 ? 'Front' :
            n <= 40 ? 'Middle': 'Back';
  };
  
  function planeSeat(a){
      let str = a.match(/\D|[0-9]+/g),
          frontString = convertFrontString(+str[0]),
          endString = convertEndString(str[1]);
  
      return (frontString !== null && endString !== null) ? frontString.concat('-',endString) : 'No Seat!!';
  }

// 優化版
function planeSeat(a){
    let letter = a.slice(-1), number = +a.slice(0,a.length-1);
    
    if(number > 60 || number < 1 || /[ij]/i.test(letter)) return 'No Seat!!';
    
    let front = number <= 20 ? 'Front' :
                number <= 40 ? 'Middle': 'Back';
                
    let end = /[abc]/i.test(letter) ? 'Left'  :
              /[def]/i.test(letter) ? 'Middle': 'Right';
    
    return `${front}-${end}`;
}

console.log(planeSeat('2B'));
console.log(planeSeat('20B'));
console.log(planeSeat('58I'));