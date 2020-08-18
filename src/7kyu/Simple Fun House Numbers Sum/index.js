function houseNumbersSum(inputArray) {
  let k = inputArray.indexOf(0), sum = 0;
  for(let i=0; i<=k; i++) sum += inputArray[i];
  return sum;
}