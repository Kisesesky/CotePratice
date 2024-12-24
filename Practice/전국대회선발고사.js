function solution(rank, attendance) {
    let student = 
    rank
    .map((r, i) =>({rank : r, index : i}))
    .filter((student, i) => attendance[i]);
    
    student.sort((a,b) => a.rank - b.rank);
    
    const students = student.slice(0, 3).map(student => student.index);
    
    const result = students[0] * 10000 + students[1] * 100 + students[2] * 1;
    
    
    return result;
    // rank att che  value
    // 3     f
    // 7     t
    // 2     t   v   1번째 index *1000 
    // 5     t   v   2번째 index
    // 4     t   v   3번재 index *100
    // 6     f 
    // 1     f
    
}
//다른풀이 

function solution(rank, attendance){
    let temp = rank.filter((item, idx) => attendance[idx]) //[7,2,5,4]
    temp.sort((a, b)=>(a-b)); //[2,4,5,7]
    temp = temp.slice(0, 3); //[2,4,5]
    const result = temp.map(item => rank.findIndex(i => item === i)) //[2, 4, 3]
    return 10000*result[0] + 100*result[1] + result[2];
}