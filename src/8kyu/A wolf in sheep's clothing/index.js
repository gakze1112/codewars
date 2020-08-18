function warnTheSheep(queue) {
    let front = queue.length - 1;
    if(queue[front] === "wolf") return "Pls go away and stop eating my sheep";
    
    for(let sheepNumber=0; front >= 0; front--){
      if(queue[front] !== "sheep") return 'Oi! Sheep number '.concat(sheepNumber,'! You are about to be eaten by a wolf!');
      sheepNumber++;
    }
  }

// 最佳解
function warnTheSheep(queue) {
    const position = queue.reverse().indexOf('wolf');
    return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
}