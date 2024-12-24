function solution(food) {
    let countNum = ''; 

    for (let i = 1; i < food.length; i++) {
        let count = Math.floor(food[i] / 2); 
        countNum += String(i).repeat(count); 
    }
    let answer = countNum + '0' + [...countNum].reverse().join('');
    return answer;
}

function solution(food){
    var answer = '';
    food(let i=1;i<food.length;i++){
       answer += String(i).repeat(Math.floor(food[i] /2))
    }
    return answer + '0' + [...answer].reverse().join('');
}