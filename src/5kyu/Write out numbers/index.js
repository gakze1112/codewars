/*
const numbers = new Map([
    // 1 ~ 10
    [1,'one'],[2,'two'],[3,'three'],[4,'four'],[5,'five'],[6,'six'],[7,'seven'],[8,'eight'],[9,'nine'],[10,'ten'],
    
    // 11 ~ 20
    [11,'eleven'],[12,'twelve'],[13,'thirteen'],[14,'fourteen'],[15,'fifteen'],[16,'sixteen'],[17,'seventeen'],[18,'eighteen'],[19,'nineteen'],[20,'twenty'],
    
    // 十位數，結尾為 0
    [30,'thirty'],[40,'forty'],[50,'fifty'],[60,'sixty'],[70,'seventy'],[80,'eighty'],[90,'ninety']
]);

    input : 
        d2 : 百位數
        d1 : 十位數
        d0 : 個位數
    
    output : 英文數字


const toEnglishWords = (d2,d1,d0) =>{
    let integerWords = [];

    // 轉換百位數
    if(d2 > 0){
        integerWords.push(numbers.get(d2));
        integerWords.push('hundred');

        if(d1 === 0 && d0 === 0) return integerWords.join(' ');
    }

    // 轉換十位數
    if(d1 > 0) {
        let k = d1*10 + d0;

        if(numbers.has(k)) integerWords.push(numbers.get(k));
        else integerWords.push(`${numbers.get(d1 * 10)}-${numbers.get(d0)}`);

        return integerWords.join(' ');
    }

    // 轉換個位數
    if(d0 > 0){
        integerWords.push(numbers.get(d0));

        return integerWords.join(' ');
    }

    return null;
};


function IntegerToEnghishWords(n){
    if(n === 0) return 'zero';

    let digits = n.toString().split('').map(val => +val),
        temp = [];
    
    while(digits.length%3 !== 0) digits.unshift(0);

    
    for(let i = digits.length; i > 0; i -= 3){
        let str = toEnglishWords(digits[i-3],digits[i-2],digits[i-1]);

        if(str !== null) temp.push(str);
        if(i > 3) temp.push('thousand');
    }

    return temp.reverse().join(' ');
}
*/

// 最佳解

// 數字與單字對照表(table): 0 ~ 19
const englishNum1 = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];

// 數字與單字對照表(table): 20,30,40,50,60,70,80,90
const englishNum2 = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

function number2words(n){
    if(n >= 0 && n < 20) return englishNum1[n];

    if(n >= 20 && n < 100){
        return englishNum2[Math.floor(n/10) - 2] + ( n%10 === 0 ? '' : '-'+englishNum1[n%10] );
    }

    if(n >= 100 && n < 1000){
        return englishNum1[Math.floor(n/100)] + ' hundred' + ( n%100 === 0 ? '' : ' '+number2words(n%100));
    }
    else {
        return number2words(Math.floor(n/1000))+' thousand'+ ( n%1000 === 0 ? '':' '+number2words(n%1000));
    }
}

console.log(number2words(15080));