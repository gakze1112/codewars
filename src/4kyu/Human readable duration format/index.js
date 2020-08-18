function toString(n,timeUnit){
    if(n === 1) return `${n.toString()} ${timeUnit}`;
    if(n > 1) return `${n.toString()} ${timeUnit}s`;

    return '';
}

function toSentence(words){
    if(words.length < 2) return words.join('');
    if(words.length === 2) return words.join(' and ');

    let last = [];
    last.push(words.pop());
    last.push(words.pop());
    
    words.push(last.pop() + ' and ' + last.pop());
    return words.join(', ');
}

function formatDuration (seconds) {
    if(seconds === 0) return 'now';

    const time = {
        year   : Math.floor(seconds / 31536000),
        day    : Math.floor(seconds / 86400) % 365,
        hour   : Math.floor(seconds / 3600) % 24,
        minute : Math.floor(seconds / 60) % 60,
        second : seconds % 60,
    };

    let words = [];
    for(let [timeUnit, value] of Object.entries(time)){
        let str = toString(value,timeUnit);
        if(str !== '') words.push(str);
    }

    return toSentence(words);
}

// 他人寫的 簡化寫法 ----> 這比較容易思考。
function formatDuration (seconds) {
    var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
        res = [];
  
    if (seconds === 0) return 'now';
    
    for (var key in time) {
      if (seconds >= time[key]) {
        var val = Math.floor(seconds/time[key]);
        res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
        seconds = seconds % time[key];
      }
    }
   
    return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
}


console.log(formatDuration(3662));