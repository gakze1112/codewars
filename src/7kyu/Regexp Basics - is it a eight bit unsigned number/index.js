String.prototype.eightBitNumber = function() {
    switch(this.length){
      case 1: return /\d/.test(this);
      case 2: return /[1-9]\d/.test(this);
      case 3: return /1\d\d|2[0-4]\d|25[0-5]/.test(this);
      default: return false;
    }
  }

console.log("0".eightBitNumber());
console.log("".eightBitNumber());
console.log("167".eightBitNumber())
//console.log("0".eightBitNumber());
//console.log("0".eightBitNumber());