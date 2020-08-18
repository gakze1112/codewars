function maxRot(n) {
  let sequence = [n],
      digits = n.toString(),
      length = digits.length - 1;

  for(let i = 0; i < length; i++){
    let fixed = digits.slice(0,i),
        rotate = digits.slice(i,i+1),
        remains = digits.slice(i+1, digits.length);

    digits = fixed.concat(remains,rotate);
    sequence.push(+digits);
  }

  return Math.max(...sequence);
}

// 簡化寫法
// 最新版本的 javascript 好像有針對 + 做效能提升
function maxRot(n) {
  let sequence = [n],
      digits = n.toString(),
      length = digits.length - 1;

  for(let i = 0; i < length; i++){
    digits = digits.slice(0,i) + digits.slice(i,i+1) + digits.slice(i+1, digits.length);
    sequence.push(+digits);
  }

  return Math.max(...sequence);
}

//console.log(maxRot(38458215));
console.log(maxRot(56789));