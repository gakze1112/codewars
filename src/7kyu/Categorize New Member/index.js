function openOrSenior(data){
  return data.map((listItem)=>{
    let age = listItem[0];
    let handicap = listItem[1];
    
    if(handicap < -2 || handicap > 26) return;
    if(age >= 55 && handicap > 7) return "Senior";
    return "Open";
  });
}