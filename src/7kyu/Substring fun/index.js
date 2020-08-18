function nthChar(words){
    return words.map((str,i) => str.slice(i,i+1)).join('');
}