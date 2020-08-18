function countSheeps(arrayOfSheep) {
  let count=0;
  arrayOfSheep.forEach((value)=>{
    if(value) count++;
  });
  
  return count;
}