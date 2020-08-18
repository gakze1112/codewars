/*
    [前置知識]
        在數學中，奇偶性是對於整數的一種性質，每個整數都可被分為奇數或偶數。
        1. 可以被2整除者是偶數。 (包含2和0)。
        2. 不可以被2整除者是奇數。

        參考資料
            https://zh.wikipedia.org/wiki/%E5%A5%87%E5%81%B6%E6%80%A7_(%E6%95%B0%E5%AD%A6)
    奇偶性質:
        1. 奇數 + 奇數 = 偶數
        2. 奇數 + 偶數 = 奇數
        3. 偶數 + 偶數 = 偶數

    [演算法]
        已知條件 : 
            1. weight 為非零正整數以及偶數，但是 weight != 2。
            2. weight 由兩個非零正整數組成 ----> 由給定的測試案例觀察得知。

        解法 :
            if(weight > 2 && weight%2 === 0) truly-case.
*/
function divide(weight){
    return (weight<=2 || weight%2)? false:true;
}