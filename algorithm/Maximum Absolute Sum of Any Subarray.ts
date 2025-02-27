//O(n^2)나옴;;; 시간초과
function maxAbsoluteSum(nums: number[]): number {
    let resultSum = 0;
    let queue:[number, number][] = []; 
  
    for(let i=0; i<nums.length; i++){
      queue.push([i, 0])
    }
    while(queue.length){
      let [idx, sum] = queue.pop();
      let sums = sum + nums[idx]
      resultSum = Math.max(resultSum, Math.abs(sums))
          if(idx + 1 < nums.length){
              queue.push([idx + 1, sums])
          }
      }
      return resultSum
    }

//kadane's algorithm
function maxAbsoluteSum2(nums: number[]): number {
    let posMax = 0;
    let nagMax = 0;
    let absMax = 0;

    for(const num of nums){
        posMax = Math.max(0, posMax) + num;
        nagMax = Math.min(0, nagMax) + num;

        absMax = Math.max(absMax, posMax, -nagMax)
    }

    return absMax
};