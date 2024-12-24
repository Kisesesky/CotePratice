function solution(arr, query) {
    for(let i = 0; i<query.length; i++){
        if(i%2 === 0){ //짝수일경우 뒷부분 삭제 +1
           arr = arr.splice(0, query[i]+1);
        }if(i%2 === 1){ //홀수일경우 앞부분 삭제 
            arr = arr.splice(query[i]);
        }
    }
    return arr;
}