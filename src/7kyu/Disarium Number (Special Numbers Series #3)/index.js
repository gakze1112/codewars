function disariumNumber(n){
    let sum = n.toString()
               .split('')
               .reduce((acc,value,i)=> acc + Math.pow(value,i+1),0);

    return (sum === n)? 'Disarium !!' : 'Not !!';
}