function combat(health, damage) {
    return (health >= damage)? health - damage : 0;
}

// 其他解
function combat(health, damage) {
    return Math.max(health - damage,0);
}