function maxNumber(n){
    return Number(
             n.toString()
              .split('')
              .sort((a,b) => Number(b) - Number(a))
              .join(''));
  }