function solution(answers) {
    var answer = [];
     let per1 = [1,2,3,4,5]
     let per2 = [2,1,2,3,2,4,2,5]
     let per3 = [3,3,1,1,2,2,4,4,5,5]
     
     
     let result1 = answers.filter((item, idx) => item === per1[idx % per1.length]).length
     let result2 = answers.filter((item, idx) => item === per2[idx % per2.length]).length
     let result3 = answers.filter((item, idx) => item === per3[idx % per3.length]).length
    
    // 배열 문제로 인한 코드 수정;;
    //  let result1 = per1.filter((item, idx) => item === answers[idx]).length
    //  let result2 = per2.filter((item, idx) => item === answers[idx]).length
    //  let result3 = per3.filter((item, idx) => item === answers[idx]).length
    
     
     let score = [result1, result2, result3]
     let maxScore = Math.max(...score)
     score.forEach((item, idx)=>{
         if(item === maxScore) {
             answer.push(idx +1)
         }
     })
     
     
    return answer;
}

//다른풀이

function solution(answers){
    var answer = [];
    const arr1 = [1,2,3,4,5]
    const arr2 = [2,1,2,3,2,4,2,5]
    const arr3 = [3,3,1,1,2,2,4,4,5,5]

    const temp = [];

    const result = answers.reduce((pre,cur,idx)=>{
        if(cur===arr1[idx%arr1.length])
            pre[1] = (pre[1] || 0) + 1
        if(cur===arr2[idx%arr2.length])
            pre[2] = (pre[2] || 0) + 1
        if(cur===arr3[idx%arr3.length])
            pre[3] = (pre[3] || 0) + 1
        
        return pre
    }, {})

    temp = Object.entries(result)
    temp.sort((a,b)=> {
        if(a[1] === b[1])
            return a[0] - b[0]
        return b[1] - a[1]
    })

    answer.push(+tmep[0][0])
    for(let i=1; i<temp.length; i++){
        if(temp[0][1] === temp[i][1])
            answer.push(+temp[i][0])
        else 
            break
    }
    return answer;
}