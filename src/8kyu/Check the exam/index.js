function checkExam(answers, correct) {
    let score = 0, max = answers.length;
    for(let i=0; i<max; i++){
      score += (answers[i] === correct[i])? 4 : (correct[i] === "")? 0 : -1;
    }
    return (score < 0)? 0 : score;
  }

// 其他解
function checkExam(answers, correct) {
    return answers.reduce((score,current,i) => {
        score += (current === correct[i])? 4: (correct[i] === "")? 0 : -1;
        return Math.max(score,0);
    },0);
}