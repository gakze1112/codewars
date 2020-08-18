function abbrevName(name){
    return name.split(' ').map( str => str.charAt(0).toUpperCase()).join('.');
}

// 其他解
const abbrevName = name => name.match(/\b\w/g).join('.').toUpperCase()