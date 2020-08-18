const generate = length => {
    let binary = [];
    for(let i = 0; i < length; i++)
      binary.push(Math.floor(Math.random()*2));
    
    return binary.join('');
};