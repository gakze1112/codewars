// TODO: Refactor and shorten the function
// 要求 136 個字元以內，下面的解法 122 個字元。
function describeAge(age) { 
    return "You're a(n) ".concat(age<13? "kid":age<18? "teenager":age<65? "adult":"elderly");
}