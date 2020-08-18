// 直覺是對的，可以用 stack

const opposite = {
    'NORTH': 'SOUTH',
    'SOUTH': 'NORTH',
    'EAST' : 'WEST',
    'WEST' : 'EAST',  
};

function dirReduc(arr){
  let simplePath = [];
  
  simplePath.push(arr.shift());
  while(arr.length){
    let current = arr.shift(),
        last = simplePath.length - 1;
        
    if(simplePath[last] === opposite[current]) simplePath.pop();
    else simplePath.push(current);
  }
  
  return simplePath;
}

const opposite = {
    'NORTH': 'SOUTH',
    'SOUTH': 'NORTH',
    'EAST' : 'WEST',
    'WEST' : 'EAST',  
};

// 他人寫出來的最佳解
function dirReduc(plan){
    return plan.reduce(function(dirs, dir){
        if (dirs[dirs.length - 1] === opposite[dir])
            dirs.pop();
        else
            dirs.push(dir);

        return dirs;
    }, []);
}

console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));