function solution(t,p){
    var answer = 0;
    for(let i=0; i<t.length-p.length; i++){
        let tempStr = t.slice(i, i+p.length)
        if(+tempStr <= +p)
        answer++
    }
    return answer
}