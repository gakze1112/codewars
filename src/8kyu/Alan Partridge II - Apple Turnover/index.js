function apple(x){
  let n = (+x);
  if(isNaN(x)) return;
  
  return ( (n*n) >= 1000)? 
    'It\'s hotter than the sun!!':
    'Help yourself to a honeycomb Yorkie for the glovebox.';
}