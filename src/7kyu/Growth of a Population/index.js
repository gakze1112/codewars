function nbYear(p0, percent, aug, p) {
    let total = p0;
    let year = 0;
    
    while(total < p){
      total += (total * (percent/100) + aug);
      year++;
    }
    
    return year;
}