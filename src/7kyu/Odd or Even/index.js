// Odd or Even.js
function oddOrEven(array) {
    let sum = array.reduce((sum,value) => sum += value, 0);
    return (sum%2)? 'odd' : 'even';
}

module.exports = oddOrEven;