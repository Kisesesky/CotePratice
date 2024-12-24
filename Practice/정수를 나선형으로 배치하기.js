function setArray(n){
    const result = new Array(n); // result = [ , , , ]
    for(let i=0; i<n;i++){
        result[i] = new Array(n).fill(0) // result = [[0,0,0,0],...]
    }
    return result
}

function solution(n) {
    var answer = setArray(n);
    let wayX = [1, 0, -1, 0];
    let wayY = [0, 1, 0, -1];
    let way = 0;
    let count = 1;
    let curX = 0;
    let curY = 0
    answer[curY][curX] = count;
    
    while(count<n*n){
        let nextX = curX + wayX[way];
        let nextY = curY + wayY[way];
        
        if(nextX >= n || nextX < 0 || nextY >= n || nextY < 0 || answer[nextY][nextX] !==0){
            way = (way + 1)%4;
            continue;
        }
        
        curX = nextX;
        curY = nextY;
        answer[curY][curX] = ++count;
    }
    return answer;
}