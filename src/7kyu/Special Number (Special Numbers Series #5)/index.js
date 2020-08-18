function specialNumber(n){
    return /[^0-5]/g.test(n.toString()) ? "NOT!!" : "Special!!";
}

// 類似做法
function specialNumber(n){
    return /[6-9]/g.test(n.toString()) ? "NOT!!" : "Special!!";
}