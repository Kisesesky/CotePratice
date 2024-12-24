function solution(arr) {
    let row = arr.length;          
    let col = arr[0].length;       
    console.log(row);
    console.log(col);
    
    let result = Math.abs(row - col); 

    if (row === col) {
        return arr;
    } else if (row > col) {
        for (let i = 0; i < row; i++) {
            arr[i] = arr[i].concat(new Array(result).fill(0));
        }
    } else {
        for (let i = 0; i < result; i++) {
            arr.push(new Array(col).fill(0));
        }
    }

    return arr;
}

//다른풀이
function solution(arr){
    let columns = arr[0].length;
    let row = arr.length;

    if(columns > rows){
        const tempArr = new Array(columns).fill(0);
        while(arr.length !== columns){
            arr.push(tempArr);
        }
    }else if(columns < rows){
        arr.forEach(item =>{
            while(rows !== item.length){
                item.push(0);
            }
        })
    }
    return arr;
}