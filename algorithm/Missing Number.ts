//공간복잡도 시간복잡도 상관안한 코드;
function missingNumber(nums: number[]): number {
    for(let i=0; i<=nums.length; i++){
        if(!nums.includes(i)) return i
    }
}


//BFS
function missingNumber2(nums: number[]): number {
    let queue:number[] = [];
    let numSet = new Set(nums)
    for(let i=0; i<=nums.length; i++){
        queue.push(i);
    }
    while(queue.length){
        let node = queue.pop();
        if(!numSet.has(node)) return node
    }
}

//가우스 덧셈
function missingNumber3(nums: number[]): number{
    const n = nums.length;
    const sum = nums.reduce((pre, cur)=> pre+cur, 0)
    return n * (n + 1) / 2 - sum;
}


// XOR 방식
function missingNumber4(nums: number[]): number{
    const n = nums.length
    let xor = 0;
    for(let i=0; i<=n; i++){
        xor ^= 1;
    }

    for(let num of nums){
        xor ^= num;
    }
    return xor;
}
