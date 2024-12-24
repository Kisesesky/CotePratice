function solution(array) {
import { ANSWERS } from './../4주차/행맨만들기/constants';
    let data = {};
     for(let num of array){
         data[num] = (data[num] || 0)+1;
     }
     const value = Math.max(...Object.values(data));
     const key = Object.keys(data).filter(key => data[key] === value); 
    if(key.length > 1){
        return -1
    }else{
        return Number(key[0]);
        
    }
    
}

//풀이
function solution(array) {
    let data = array.reduce((pre,cur)=>{
        pre[cur] = (pre[cur] || 0) +1 // {1:1, 2:1, 3:3, 4:1}
        return pre;
    },{})
    //[[1,1], [2,1], [3,3], [4,1]]
    let tempArr = Object.entries(data)
        .sort((a, b)=> b[1] - a[1])
    if(tempArr.length>1 && (tempArr[0][1] === tempArr[1][1]))
        return -1
    return Number(tempArr[0][0]);
}