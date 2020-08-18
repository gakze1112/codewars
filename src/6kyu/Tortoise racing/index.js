// 
function race(v1, v2, g) {
    let time = g/(v2 - v1);
    return (v1 >= v2)? [Math.floor(time),Math.floor(time*60%60),Math.floor(time*3600%60)] : null;
}