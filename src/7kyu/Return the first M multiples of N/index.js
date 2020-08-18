function multiples(m, n){
    let products = [];
    for(let i = 1; i <= m; i++){
      products.push(i * n);
    }
    
    return products;
  }