String.prototype.isLetter = function() {
    return this.length === 1 ? /[a-zA-Z]/g.test(this) : false;
}

// 優化
String.prototype.isLetter = function() {
    return this.length === 1 && /[a-zA-Z]/g.test(this);
}