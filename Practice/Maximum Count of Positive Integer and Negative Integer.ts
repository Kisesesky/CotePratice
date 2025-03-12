//이진탐색
function maximumCount(nums: number[]): number {
    let left = 0
    let right = nums.length -1
    while(left <= right){
        let mid = Math.floor((left+right) / 2)
        if(nums[mid] <0){
            left = mid +1
        } else {
            right = mid -1
        }
    }
    const negative = left

    left=0
    right=nums.length -1

    while(left <=right){
        let mid = Math.floor((left+right) / 2)
        if(nums[mid] <=0){
            left = mid +1
        } else {
            right = mid -1
        }
    }
    const positive = nums.length - left
    return Math.max(negative, positive)
};