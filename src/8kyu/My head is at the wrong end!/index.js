function fixTheMeerkat(arr) {
    return arr.reverse();
}

// 其他解
const fixTheMeerkat = ([tail, body, head]) => [head, body, tail]