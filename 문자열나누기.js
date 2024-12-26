function solution(s){
    var answer = 0;
    let count = 0;

        while(s.length > 0){
            for(let i =0; i < s.length; i++){
                count += (s[i] === s[0]) ? 1: -1;
                if(count === 0){
                    answer++;
                    s = s.slice(i+1);
                    count = 0;
                    break;
                }
            }
        }
    return answer;
}
//timeout error

//풀이
function solution(s){
    var answer =0;
    let first = s[0];
    let firstCount = 0;
    let otherCount = 0;

    for(let i=0; i<s.length; i++){
        if(s[i] === first)
            firstCount++
        else
            otherCount++
        if(firstCount === otherCount){
            answer++;
            if(i+1<s.length)
                first = s[i+1]
            firstCount = 0;
            otherCount = 0;
        }
    }
    if(firstCount !== 0 || otherCount !==0)
        answer++
    return answer;
}