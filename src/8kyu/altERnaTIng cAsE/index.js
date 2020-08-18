String.prototype.toAlternatingCase = function () {
    return this.split('').map( char => {
      let c = char.charCodeAt(0);
      return   (c>64 && c<91)? String.fromCharCode(c+32) :
               (c>96 && c<123)? String.fromCharCode(c-32): char;
    }).join('');
}

// 最佳解
String.prototype.toAlternatingCase = function () {
    return this.split('').map( char => /[A-Z]/.test(char) ? char.toLowerCase() : char.toUpperCase()).join('');
  }