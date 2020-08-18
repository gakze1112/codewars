function gps(s, x) {
    if(x.length <= 1) return 0;
    
    let speed = [],
        length = x.length - 1;
          
    for(let i = 0; i < length; i++){
      speed.push( (x[i+1] - x[i])*3600 / s );
    }
    
    return Math.max(...speed);
  }