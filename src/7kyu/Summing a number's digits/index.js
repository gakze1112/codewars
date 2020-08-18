function sumDigits(number) {
    return Math.abs(number).toString().split('').reduce((sum,v) => sum + Number(v),0);
}
