// petalSpeed : speed of a petal
// time : the time that it takes for that petal reach the ground from the same branch.
// branch height : 400 cm

function sakuraFall(v) {
    return (v <= 0) ? 0 : 400 / v;
}