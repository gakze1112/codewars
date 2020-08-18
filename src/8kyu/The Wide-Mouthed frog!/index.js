function mouthSize(animal) {
    return (animal.toLowerCase() === 'alligator') ? 'small' : 'wide';
}

// 其他解 - 正規表達式 ---> 如果有遇到文字取代的部分，盡可能用正規表達式來處理，順便練習寫法
// 原因：
// 1. 只要是文字搜尋/取代能完成的事情，正規表達式都能處理。
// 2. 除了 javascript 之外，batch/c-shell/C++等其他語言，甚至工具(如：電子書)等，都有支援 正規表達式。
// 3. 學會正規表達式的規則之後，其他語言的表達方式，僅差別在於語法不同，需要找對照表逐漸翻譯。
function mouthSize(animal) {
    return (animal.match(/alligator/i)) ? 'small' : 'wide';
}