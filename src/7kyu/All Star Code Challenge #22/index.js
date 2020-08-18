function toTime(seconds) {
  let time = [];
  for(let i = 0; i < 2; i++){
    time.push(seconds%60);
    seconds = Math.floor(seconds/60);
  }
  
  time.push(seconds);
  
  return `${time[2]} hour(s) and ${time[1]} minute(s)`;
}

// 最佳解
function toTime(seconds) {
  let hour = Math.floor(seconds / 3600),
      minute = Math.floor(seconds % 3600 / 60);

  return `${hour} hour(s) and ${minute} minute(s)`;
}