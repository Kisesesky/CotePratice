
function solution(keymap, targets){
    var answer = [];
    targets.forEach(target=>{
        let cnt = 0;
        for(let i=0;i<target.length; i++){
            let min = Infinity // 미니멈값을 찾을때 
            keymap.forEach(item=>{
                const idx = item.indexOf(target[i])
                if(idx !== -1)
                    min = Math.min(min, idx+1)
            })
            if(min === Infinity){
                cnt = -1
                break
            }
            cnt += min;
        }
        answer.push(cnt)
    })
    return answer;
}

//맥시멈값을 찾을때
// let max = -1
// for
// max = MAth.max(max,비교할요소)