/*
function tailSwap(arr) {
      let a = arr[0].split(':'),
          b = arr[1].split(':'),
          temp = a[1];
          
          a[1] = b[1];
          b[1] = temp;
          
      return [a.join(':'), b.join(':')];
}*/

// 優化版 ---> 試試看用正規表達 
function tailSwap(arr) {
    let regExp = /:.*/,
        temp = arr.map(str => str.match(regExp));

    arr[0] = arr[0].replace(regExp, temp[1]);
    arr[1] = arr[1].replace(regExp, temp[0]);

    return arr;
}

// 可讀性高 ---> 這個讚!
function tailSwap(arr) {
    const [aa, ab] = arr[0].split(':'),
          [ba, bb] = arr[1].split(':');

    return [`${aa}:${bb}` , `${ba}:${ab}`];
}