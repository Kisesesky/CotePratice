function solution(absolutes, signs) {
    var answer = absolutes.reduce((pre,cur,i)=>{
        return signs[i]? pre + cur : pre - cur;
    },0)

    return answer;
}

function solution(absolutes, signs){
    var answer = 0;
    for(let i = 0; i<absolutes.length; i++){
        if(signs[i] === false){
            answer -= absolutes[i];
        }else{
            answer += absolutes[i]
        }
    }
    return answer
}