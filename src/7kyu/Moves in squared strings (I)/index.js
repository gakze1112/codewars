function vertMirror(strng) {
    return strng.map( s => s.split('').reverse().join('')).join('\n');
}
function horMirror(strng) {
  return strng.reverse().join('\n');
}
function oper(fct, s) {
  return fct(s.split('\n'));
}

// 比較好的做法
function vertMirror(strng) {
    return strng.split('\n').map( str => str.split('').reverse().join('')).join('\n');
}
function horMirror(strng) {
  return strng.split('\n').reverse().join('\n');
}
function oper(fct, s) {
  return fct(s);
}