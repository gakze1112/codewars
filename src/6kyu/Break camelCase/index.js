// 正規表達練習 - 尚未最佳化
function solution(string) {
    return string.replace(/([a-z])([A-Z])/g,(match,p1,p2)=>{
      return [p1,p2].join(" ");
    });
}

// 更好的寫法
// $1 : 表示正規表達式第一個匹配結果 , 通常會配合 ()
function solution(string) {
  return string.replace(/([A-Z])/g," $1");
}