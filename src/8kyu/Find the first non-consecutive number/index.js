function firstNonConsecutive (arr) {
    let max = arr.length;
    for(let i=1; i<max; i++){
      let previous = arr[i-1], current = arr[i];
      if(current-1 !== previous) return current;
    }
    return null;
}