var quote = function(fighter) {
    let winner = fighter.toLowerCase();
    if(winner === 'george saint pierre') return 'I am not impressed by your performance.';
    if(winner === 'conor mcgregor') return 'I\'d like to take this chance to apologize.. To absolutely NOBODY!';
};

// 其他解
var quote = function(fighter) {
    let winner = fighter.toLowerCase();
    switch(winner){
        case 'george saint pierre' : return 'I am not impressed by your performance.';
        case 'conor mcgregor' : return 'I\'d like to take this chance to apologize.. To absolutely NOBODY!';
        default: return;
    }
};