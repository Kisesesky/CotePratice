function solution(s) {
    var answer = [];
    var array = {};
    
    for(let i = 0; i<s.length; i++){
        let count = s[i];
        
        if(i === 0 || !(count in array)){
            answer.push(-1);
        }else{
            answer.push(i - array[count]);
        }
            array[count] = i;
    }
    return answer;
}

function solution(s) {
    var answer = [];
    let arr = [];
    [...s].forEach((item, idx)=>{
        if(!arr.includes(item))
            answer.push(-1)
        else if(arr.includes(item)){
            answer.push(idx - arr.lastIndexOf(item))
        }
        arr.push(item)
    })
    return answer;
}