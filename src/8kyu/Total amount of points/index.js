// 平均花費時間 : Time: 953ms
function points(games) {
    return games.map(element => {
      let record = element.split(':');
      let x = Number(record[0]), y = Number(record[1]);
      
      return (x === y) ? 1 : (x > y)? 3 : 0;
    }).reduce( (res,val) => res + val,0);
  }

// 其他解 : 思維一樣，寫法改變。
// 隱性型別轉換
function points(games) { 
  return games.reduce( (total, record) => {
    let x = record[0];
    let y = record[2];

    return total += (x > y)? 3: (x === y)? 1 : 0;
  },0);
}