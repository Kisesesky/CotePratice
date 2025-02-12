function searchInsert(nums: number[], target: number): number {
    for(let i = 0; i< nums.length; i++){
        if(nums[i] === target){
            return i;
        }
        if(nums[i] > target){
            return i;
        }
    }
    return nums.length;
};

//
function searchInsert2(nums: number[], target: number): number {
    let left = 0, right = nums.length-1;

    while(left <= right){
        let mid = Math.floor((left + right) / 2)
        
        if(nums[mid] === target)
            return mid;
        else if(nums[mid] < target)
            left = mid +1;
        else if(nums[mid] > target)
            right = mid -1;
    }
    return left
    
};
