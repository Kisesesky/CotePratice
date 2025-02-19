function solution(maps) {
    var answer = 0;
    
    const visited = Array(maps.length).fill(0).map(()=>Array(maps[0].length).fill(0));
    const wayX = [1, 0, -1, 0];
    const wayY = [0, 1, 0, -1];
    const queue = [];
    const maxX = maps[0].length - 1;
    const maxY = maps.length - 1;
    queue.push([0, 0]);
    visited[0][0] = 1;
    
    while(queue.length){
        const [y, x] = queue.shift();
        if(y===maxY && x===maxX)
            break;
        for(let i=0; i<4; i++){
            const nextX = x + wayX[i];
            const nextY = y + wayY[i];
            
            if(nextY>=0 && nextX >=0 && nextY < maps.length && nextX < maps[0].length){
                if(maps[nextY][nextX] === 1 && visited[nextY][nextX] === 0){
                    queue.push([nextY, nextX]);
                    visited[nextY][nextX] = visited[y][x] + 1;
                }
            }
        }
    }
    return visited[maxY][maxX] === 0 ? -1 : visited[maxY][maxX];
}