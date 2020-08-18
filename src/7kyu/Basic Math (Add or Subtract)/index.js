function calculate(str) {
  return str.replace(/plus/g,',')
            .replace(/(minus)(\d)/g, ',-$2')
            .split(',')
            .reduce((a,b) => a + +b, 0)
            .toString();
}