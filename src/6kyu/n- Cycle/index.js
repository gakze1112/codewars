function cycle(n){
    if(n%2 === 0 || n%5 === 0) return -1;

    let digits = [],
        visited = Array.from({length: n - 1}).fill(false);

    for(let m = 1; true; m *= 10){
        digits.push(Math.floor(m/n));
        m %= n;

        if(visited[m]) break;
        visited[m] = true;
    }

    return digits.length - 1;
}

console.log(cycle(197));