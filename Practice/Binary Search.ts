function search(nums: number[], target: number): number {
    // [-1,0,3,5,9,12]
    let left = 0
    let right = nums.length -1 //5

    // target 9
    while(left <= right){
        let mid = (left+right) >> 1
        if(nums[mid] === target) {
            return mid
        } else if(nums[mid] > target) {
            right = mid -1
        } else {
            left = mid +1
        }
    }
    return -1
};