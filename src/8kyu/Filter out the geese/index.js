// 正規解
// 利用 Array.prototype.includes()
function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter( words => !geese.includes(words));
};

// 正規表達式 ---> 這作法雖然題目意思不變。但是變動了道題目給定的條件。
function gooseFilter (birds) {
    return birds.filter( words => /[^(African|Roman Tufted|Toulouse|Pilgrim|Steinbacher)]/.test(words));
};