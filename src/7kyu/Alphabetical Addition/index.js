function addLetters(...letters) {
    // i = {1,2,3,...,26}, 0 fall into disuse.
    let alphabet = '0abcdefghijklmnopqrstuvwxyz'.split('');
    let offset = letters.reduce((acc,char) => acc + alphabet.indexOf(char) ,0);

    // if(i == 0 || i == 26) then alphabet[i] is 'z'.
    let i = offset%(alphabet.length - 1);
    if(i === 0) i = alphabet.length - 1;
    
    return alphabet[i];
}