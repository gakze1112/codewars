function basicOp(operation, value1, value2)
{
  switch(operation){
    case '+': return value1 + value2;
    case '-': return value1 - value2;
    case '*': return value1 * value2;
    case '/': return value1 / value2;
    default: break;
  }
}

// 特殊解法
// evel 用法有資安問題，盡量別用。
// 另外，eval() 通常比其他替代方法更慢，因为它必须调用 JS 解释器，而许多其他结构则可被现代 JS 引擎进行优化。
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval
function basicOp(operation, value1, value2)
{
    return evel(value1+operation+value2);
}