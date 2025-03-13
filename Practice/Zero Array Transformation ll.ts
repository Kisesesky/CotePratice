function minZeroArray(nums: number[], queries: number[][]): number {
    let temp = Array(nums.length + 1)

    function check (k: number) {
        temp.fill(0)
        for(let i=0; i<k; i++){
            const [l, r, val] = queries[i]
            temp[l] += val;
            temp[r+1] -= val;
        }
        let sum = 0
        for(let i=0; i<nums.length; i++){
            sum += temp[i]
            if(nums[i] > sum) return false
        }
        return true
    }

    let [left, right] = [0, queries.length +1]

    while(left < right) {
        // const mid = Math.floor((left+mid)/2)
        const mid = (left + right ) >> 1
        if(check(mid)){
            right = mid
        } else {
            left = mid +1
        }
    }
    return left > queries.length ? -1 : left
};