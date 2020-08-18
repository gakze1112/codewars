function wordsToMarks(string){
    return string.split('')
                 .map(letter => +letter.charCodeAt(0) - 96)
                 .reduce((acc, val) => acc + val, 0);
  }