// 正規表達練習
// \s : 空白字元, g: 全域搜尋
// /\s/g
function noSpace(x){
    // g : 意思是全域搜尋，也就是說在 x 字串內，找出每一個空白字元。
    return x.replace(/\s/g,"");
}