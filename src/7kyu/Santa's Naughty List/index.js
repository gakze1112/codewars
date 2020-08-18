function findChildren(santasList, children) {
    let santas = new Set(santasList),
        child = new Set(children),
        output = [];
        
        santas.forEach( value => {
          if(child.has(value)) output.push(value);
        });
        
        return output.sort();
  }

// 優化版
function findChildren(santasList, children) {
    return [...new Set(children)].filter(item => santasList.includes(item)).sort();
}