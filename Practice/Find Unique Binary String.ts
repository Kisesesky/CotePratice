function findDifferentBinartString(nums: string[]): string {
    let result = ''
    for(let i=0; i<nums.length; i++){
        result += nums[i][i] === "0" ? "1" : "0"
    }
    return result

    // return nums.map((num, idx)=> num[idx] === '0' ? '1' : '0').join('')

}


//dfs 풀이
function findDifferentBinaryString2(nums: string[]): string {
    const numSet = new Set(nums);
    const numL = nums.length;

    let stack = [""];
    while(stack.length){
        let cur = stack.pop();
        if(cur.length === numL){
            if(!numSet.has(cur)) return cur
        }else{
            stack.push(cur + "1")
            stack.push(cur + "0")
        }
    }
    return 
};

function findDifferentBinaryString3(nums: string[]): string {
    let temp = new Set<number>();
    nums.forEach(num=> temp.add(parseInt(num, 2)))
    for(let i=0; i<Math.pow(2, nums.length); i++){
        if(!temp.has(i)){
            let result = i.toString(2);

            if(result.length !== nums.length){
               return '0'.repeat(nums.length - result.length) + result
            }
            return result;
        }
    }
};


