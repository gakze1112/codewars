function lottery(str){
    return [...new Set(str.match(/\d/g)).values()].join('') || "One more run!";
}