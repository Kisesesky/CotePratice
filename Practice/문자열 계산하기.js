function solution(my_string) {
    my_string = my_string.replace(/\s/g, '');
     while (/\d+[\+\-]\d+/.test(my_string)) {
        my_string = my_string.replace(/(-?\d+)([\+\-])(-?\d+)/, (_, a, operator, b) => {
            let num1 = Number(a);
            let num2 = Number(b);
            
            if (operator === '+') return String(num1 + num2);
            if (operator === '-') return String(num1 - num2);
        });
    }
    return Number(my_string);
}

//풀이
function solution(my_string){
    let answer = new Function(`return ${my_string}`)();
    return answer;
}

//풀이
    // str.match(/\s[+-]/g)                // \s:공백  \t:tab \n:enter g:전체
    // str.match(/-?\d/g).map(Number)      // \d:숫자
    // str.match(/-?[0-9]/g).map(Number)   //숫자 범위를 정해서

//풀이
function solution(my_string) {
    let operators = my_string.match(/\s[+-]\s/g) // [" + "]
    let nums = my_string.match(/-?\d+/g).map(Number) //[3, 4]
    let answer = nums[0];
    for(let i=0;i<operators.length; i++){
        if(operators[i].trim()==='+'){
            answer += nums[i+1]
        }
        else if(operators[i].trim()==='-'){
            answer -= nums[i+1]
        }
    }
    return answer;
}