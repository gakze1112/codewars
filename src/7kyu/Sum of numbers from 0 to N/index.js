var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(count) {

      if(count < 0) return `${count}<0`;
      else if(count === 0) return '0=0';
      
      let sum = 0, numbers = [];
      for(let i=0; i<=count; i++){
        numbers.push(i);
        sum += i;
      }
      
      return numbers.join('+').concat(' = ',sum);
    };
  
    return SequenceSum;
})

// 最佳解
var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    return (count < 0)? `${count}<0` :
           (count === 0)? '0=0':
           `${Array.from({length:count+1}, (value,index) => index).join('+')} = ${count*(count+1)/2}`;
  };

  return SequenceSum;
})();