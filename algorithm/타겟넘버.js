function solution(numbers, target) {
    var answer = 0;
    
    const queue = [[0, 0]];
    for(let i=0; i<queue.length; i++){
        const [sum, idx] = queue[i];
        
        if(idx >= numbers.length){
            if(sum === target)
                answer++;
        }
        else{
            queue.push([sum + numbers[idx], idx + 1]);
            queue.push([sum - numbers[idx], idx + 1]);    
        }
        
    }
    return answer;
}