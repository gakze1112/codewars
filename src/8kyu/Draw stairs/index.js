function drawStairs(n) {
    let str = "";
    for(let i=0; i<n; i++){
        for(let j=0; j<i; j++) str = str.concat(" ");
        str = str.concat("I\n");
    }

    return str;
}

// 優化解法 -- 運用內建函式 repeat,join
function drawStairs(n) {
    let str = [];
    for(let i=0; i<n; i++){
        str.push(" ".repeat(i).concat("I"));
    }
    
    return str.join("\n");
}