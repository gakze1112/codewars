// 字面樣版 練習 : `` ---> keyword
function findNeedle(haystack) {
    let index = haystack.findIndex( element => element === 'needle');
    return `found the needle at position ${index}`;
}