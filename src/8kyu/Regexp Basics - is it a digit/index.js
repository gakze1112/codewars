String.prototype.digit = function() {
    return this.match(/\D|\d\d/g) ? false :
    this.match(/\d/g) ? true : false;
};

// 最佳解 - 正規表達式
String.prototype.digit = function() {
    return /^[0-9]$/.test(this);
};