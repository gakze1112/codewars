function isIsogram(str){
    let letterCount = Array(26).fill(0),
        letters = str.toLowerCase().split(''),
        i = 0;
        
    for(let char of letters){
        i = char.charCodeAt(0) - 97;
        if(letterCount[i] > 0) return false;

        letterCount[i] += 1;
    }

    return true;  
}

// 最佳解
function isIsogram(str){
    return !/(\w).*\1/i.test(str);
}