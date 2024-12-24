function solution(d, budget) {
    d.sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < d.length; i++) {
        if (budget - d[i] >= 0) {
            budget -= d[i];
            count++;
        } else {
            break;
        }
    }
    return count;
}

//풀이
function solution(d, budget){
    let sum = 0;
    let count = 0;
    d.sort((a , b) => a - b)
    for(const item of d){
        if(sum + item > budget)
            break;
        sum+=item
        count++;
    }
    return count;
}