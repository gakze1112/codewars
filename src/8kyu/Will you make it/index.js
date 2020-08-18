const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // d: 目前油量可以跑的距離。
    let d = mpg * fuelLeft;
    return (d >= distanceToPump)? true:false;
};