Array.prototype.swap = function(x,y) {
    let temp = this[x];
    this[x] = this[y];
    this[y] = temp;

    return this;
}

function top3(products, amounts, prices) {
    let length = products.length,
        revenue = [];

    products.forEach((v,i) => revenue.push(amounts[i] * prices[i]));

    // in-place, bubble sort
    for(let i = 0; i < length; i++){
        for(let j = i + 1; j < length; j++){
            if(revenue[j] > revenue[i]){
                products.swap(i,j);
                revenue.swap(i,j);
            }
        }
    }
    
    return products.filter((v,i) => i < 3);
}

console.log(top3(["Computer", "Cell Phones", "Vacuum Cleaner"], [3, 24, 8], [199, 299, 399]));