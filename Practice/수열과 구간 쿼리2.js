function solution(arr, queries) {
    // var answer = [];
    // let q1 = arr;
    // let q2 = queries;
    // console.log(q1)
    // console.log(q2)
    // q2[0][s] q2[0][e]
    
    //[0,1,2,4,3] , [[s,e,k],[s,e,k],[s,e,k]] 
    // s < i < e  k<i
    // arr[i] 1,2
    
    return answer;
}

//풀이
function solution(arr, queries) {
    var answer =[];
    queries.forEach(query=>{
        let tempArr = arr.slice(query[0],query[1]+1)
                         .filter(item => item > query[2])
        let result = Math.min(...tempArr)
        result = result > 1000000 ? -1 : result;
        answer.push(result)
    })
    return answer;
}