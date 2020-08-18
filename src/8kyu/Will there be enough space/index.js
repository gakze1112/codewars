function enough(cap, on, wait) {
    let result = on + wait - cap;
    return (result < 0)? 0 : result;
}

// 其他解
function enough(cap, on, wait) {
  return Math.max(on + wait - cap, 0);
}