function solution(n, m, section){
    var answer = 0;
    var paint = 0;
    for(let i=0; i<section.length; i++){
        if(section[i]>paint){
            answer++
            paint = section[i]+m-1
        }
    }
    return answer
}

//다른풀이
function solution(n,m,section){
    var answer = 0;
    let arr = new Array(n).fill(true)
    section.forEach(item=>arr[item-1] = false)

    for(let i=0;i<n;i++){
        if(!arr[i]){
            i+=m-1
            answer+=1
        }
    }
    return answer;
}