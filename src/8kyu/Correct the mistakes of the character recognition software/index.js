function correct(string)
{
  return string.replace(/[501]/g,(match)=> (match === '5')? 'S': (match === '0')? 'O': 'I');
}

// 其他解
const corrections = {
    '5': 'S',
    '0': 'O',
    '1': 'I'
};

function correct(string)
{
    return string.replace(/[501]/g, character => corrections[character]);
}