function solution(name, yearning, photo) {
    var answer = [];
    const score = name.reduce((pre,cur,idx)=>{
        pre[cur] = yearning[idx];
        return pre;
    },{})
    return photo.map((n)=> n.reduce((pre,cur)=>
        pre + (score[cur] || 0),0
    ));
}

//다른풀이
function solution(name, yearning, photo){
    var answer = [];
    for(persons of photo){
        let score = 0
        for(person of persons){
            const index = name.indexOf(person)
            if(index !== -1){
                score += yearning[index]
            }
        }
        answer.push(score)
    }
    return answer;
}