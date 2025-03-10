function minimumRecolors (blocks: string, k: number): number {
    let answer = k
    for(let i =0; i<=blocks.length -k; i++){
        let count = 0
        for(let j =0; j<k; j++){
            if(blocks[i+j] === 'W') count++
        }
        if(count < answer){
            answer = count
        }
    }
    return answer
}

function minimumRecolors2 (blocks: string, k: number): number {
    let minimum = Infinity

    for(let i=0; i<=blocks.length-k; i++){
        let cntW = 0
        for(let j=i; j<i+k; j++){
            if(blocks[j] === 'W')
                cntW++
        }
        minimum = Math.min(minimum, cntW)
    }
    return minimum
}