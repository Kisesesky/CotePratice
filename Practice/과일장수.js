//메모리가 너무 많음...
function solution(k, m, score) {
    var answer = 0;
    score.sort((a, b)=> b-a);
    for(let i=0; i<score.length; i += m){
        const price = score.slice(i, i+m)
        if(price.length === m){
            answer += Math.min(...price) *m;
        }
    }
    return answer;
}


//풀이
function solution(k, m, score) {
    var answer = 0;
    let tmep =[];
    score.sort((a,b) => b- a);
    for(let i =0; i<score.length; i+=m){
        if(i+m>score.length)
            break;
        tmep.push(score.slice(i, i+m))
    }
    return tmep.reduce((pre,cur)=>{
        pre += cur[m-1] * m
        return pre
    },0)
    return answer;
}