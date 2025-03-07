function findMissingAndRepeatedValues(grid: number[][]): number[] {
    const n = grid.length
    const arr = new Array(n*n).fill(0)
    let repeat = 0
    let missing = 0

    for(let i = 0; i<grid.length; i++){
        for(let j = 0; j<grid.length; j++){
            arr[grid[i][j]-1]++
        }
    }

    for(let i=0; i<= n*n; i++){
        if(arr[i] === 2) repeat = i+1
        if(arr[i] === 0) missing = i+1
    }
    return [repeat, missing]
};

//가우스 합이용
function findMissingAndRepeatedValues2(grid: number[][]): number[] {
    const gridFlat = grid.flat();
    const n = gridFlat.length
    let temp = new Set()
    let result = []
    const sum = gridFlat.reduce((prev, cur) => {
        if(temp.has(cur)){
            result.push(cur)
            return prev
        }
        temp.add(cur)
        return cur+prev
    }, 0)
    result.push(n*(n+1)/2 -sum)
    return result
}

function findMissingAndRepeatedValues3(grid: number[][]): number[] {
    const gridFlat = grid.flat();
    const n = gridFlat.length
    let temp = new Set()
    let result = []
    gridFlat.forEach(item => {
        if(temp.has(item)){
            result.push(item)
        }
        temp.add(item)
    })

    for(let i=1; i<=n; i++){
        if(temp.has(i)){
            result.push(i)
            break;
        }
    }
    return result
}

