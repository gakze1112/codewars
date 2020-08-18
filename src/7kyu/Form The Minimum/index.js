function minValue(values){
    values.sort((a,b) => a - b);
    return +[...new Set(values).values()].join('');
  }

console.log(minValue([1, 3, 6, 1, 1, 8, 3, 8, 7, 1, 4, 0, 9, 7, 2, 1, 4, 7, 8, 1, 2, 0, 8, 2, 1, 1, 6, 0, 1, 9]));