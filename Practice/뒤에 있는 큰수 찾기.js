function solution(numbers) {
    var answer = [];
    // for(let i = 0; i<numbers.length; i++){
    //         let res = -1
    //     for(let j= i+1; j< numbers.length; j ++){
    //         if(numbers[i] <numbers[j]){
    //              res = numbers[j]
    //                 break;
    //         }
    //     }
    //         answer.push(res)
    // } // 시간복잡도 해결 X
    let tempArr = new Array(numbers.length).fill(-1);
    for(let i =0; i<numbers.length; i++){
        while (numbers [answer[answer.length -1]]< numbers[i]){
            tempArr[answer.pop()] = numbers[i]
        }
        answer.push(i)
    }
    
    
    return tempArr;
}

//다른풀이
function solution(numbers) {
    var answer = new Array(numbers.length).fill(-1)
    let stack =[]

    for(let i = numbers.length-1; i>=0; i--){
        while(stack.length>0 && stack[stack.length-1] <= numbers[i]){
            stack.pop()
        }
        if(stack.lengh >0){
            answer[i] = stack[stack.length-1]
        }
        stack.push(numbers[i])
    }
    return answer
}