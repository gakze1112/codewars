function even_or_odd(number) {
    return (number%2 === 0) ? "Even" : "Odd";
}

// 簡化
function even_or_odd(number) {
    return number%2 ? "Odd" : "Even";
}