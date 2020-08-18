function switcher(x){
    const alphabet = 'zyxwvutsrqponmlkjihgfedcba!? '.split('');
    return x.map(code => alphabet[+code - 1]).join('');
  }