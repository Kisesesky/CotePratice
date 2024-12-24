function solution(arr) {
    let count = 0;
    while(true){
       count++;
       let newarr = arr.map((item) => item % 2 === 0 && item>=50 ? item/2 : 
                            item % 2 === 1 && item<50 ? item*2+1 : item);
       if(JSON.stringify(newarr) === JSON.stringify(arr)){
           return count;
       }
        arr= newarr;
        return;
    }
}
function solution(arr) {
    let count = 0; // 몇 번째 변환인지 추적

    while (true) {
        count++;

        let newarr = arr.map((item) => item % 2 === 0 && item >= 50 
                ? item / 2 : item % 2 === 1 && item < 50 ? item * 2 + 1 
                : item);

        if (JSON.stringify(newarr) === JSON.stringify(arr)) {
            return count;
        }

        arr = newarr;

        if (count > 1000) return -1; 
    }
}

//풀이
function solution(arr) {
    let count = 0;
    let arr1 = []
    while(true){
        arr1 = arr.map(item=>{
            return item>=50? item%2===0? item/2 : item : item%2===1? item*2+1: item
        })
        
        if(JSON.stringify(arr1)===JSON.stringify(arr)){
            break;
        }
        count++;
        arr=arr1;
    }
    return count;
}