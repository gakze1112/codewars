// 正規表達式
function absentVowel(x){
    return !/a/i.test(x) ? 0:
           !/e/i.test(x) ? 1:
           !/i/i.test(x) ? 2:
           !/o/i.test(x) ? 3:4;
}

// 其他解
function absentVowel(x){
    let str = x.toLowerCase();
    return ['a','e','i','o','u'].findIndex(vowel => str.indexOf(vowel) === -1);
}