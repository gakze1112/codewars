function bonusTime(salary, bonus) {
    return '£'.concat( bonus ? salary*10 : salary);
}

// 其他解 - 混和正規表達式
function bonusTime(salary, bonus) {
    return bonus ? '£${salary*10}' : '£${salary}';
}