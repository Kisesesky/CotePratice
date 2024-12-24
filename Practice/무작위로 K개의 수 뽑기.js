function solution(arr, k) {
    arr = Array.from(new Set(arr))
    
    if(arr.length < k){
        for(let i = arr.length; i < k; i++){
            arr.push(-1)
        }
    }else{
        arr = arr.slice(0, k)
    }
    
    return arr;
}