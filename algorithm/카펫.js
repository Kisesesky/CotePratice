function solution(brown, yellow) {
        var answer = [];
        let total = brown + yellow
    
        for(let i = 3; i<=total; i++){
            if(total % i === 0){
                let j = total / i;
                if(j >= i){
                    answer.push([j,i])
                }
                console.log(answer)
                while(answer.length > 0){
                    const [j, i] = answer.pop();
                    if(j>= i && (j-2) * (i-2) === yellow){
                    return [j, i]
                    }
                }
            }
        }
        return answer;
    }

function solution2(brown, yellow){
    var answer = new Set();
    let i = 3;
    const area = brown + yellow;

    while(i <= Math.sqrt(area)){
        if(ara % i === 0){
            answer.add(i)
            answer.add(area/i);
        }
        i++;
    }
    for(const item of answer){
        const w = item;
        const h = area/item;

        const br = 2 * w + (h-2) * 2
        if(w<h)
            continue;
        if(br === brown)
            return [w, h]
    }
    

    return answer;
}