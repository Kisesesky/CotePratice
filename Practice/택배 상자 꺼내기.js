function solution(n, w, num) {
    var answer = 0;
    let current = 1;
    let arr = new Array(Math.ceil(n/w) + 1) //[],[],[],[]
    let numX = -1;
    let numY = -1;
    for(let i =0; i<arr.length; i++){
        arr[i] = new Array() // [[], [], [], []]
        for(let j =0; j<w; j++){
            if(current === num){ // num의 좌표 설정
                numY = i;
                if(i%2 === 0){
                    numX = j;
                }
                else{
                    numX = w - j - 1
                }
            }

            if(current>n){
                if(i % 2 ===0)
                    arr[i].push(0)
                else
                    arr[i].unshift(0) // [0, 0 ,22, 21, 20, 19]
            }else{
                if(i % 2 ===0)
                    arr[i].push(current++) // [1, 2, 3, 4, 5, 6]
                else
                    arr[i].unshift(current++) // [12, 11, 10, 9, 8, 7]
            }
            
        }
    }
    while(arr[numY][numX]){
        numY++;
        answer++
    }

    return answer;
}

// 오류 못찾음
function solution(n, w, num) {
    var answer = 0;
    let arr = []
    let box = 1
    
    while(box <=n){
        let row = [];
        let turn = true
        for(let i = 0; i < w && box<= n; i++){
            row.push(box++)
        }
        arr.push(row)
    }
    for(let i =0; i<arr.length; i++){
        if(i % 2 === 0){
            arr[i].reverse()
        }
    }
    console.log(arr)
    let findBox = arr.findIndex(row=> row.includes(num))
    console.log(findBox)
    for(let i =findBox; i < arr.length; i++){
        answer += arr[i].length
    }
    console.log(answer)
    
    
    // [
    // [1,2,3] 1,2
    // [6,5,4]
    // ]
    return answer;
}