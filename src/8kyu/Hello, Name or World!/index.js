function sayHello(name) {
   if(name === undefined || name.length === 0) return 'Hello, World!';

   const formattedName = name.split('')
                   .map((char, index) => (index === 0) ? char.toUpperCase() : char.toLowerCase())
                   .join('');

   return `Hello, ${formattedName}!`;
}

// 優化版本
// eslint-disable-next-line no-unused-vars
function hello(name) {
    // 這裡沒想到的部分在於 name[0] ----> 可以取出單一字元
    return `Hello, ${name ? (name[0].toUpperCase() + name.slice(1).toLowerCase()) : 'World'}!`;
}

module.exports = sayHello;