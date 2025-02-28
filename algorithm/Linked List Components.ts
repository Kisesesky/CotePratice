/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 function numComponents(head: ListNode | null, nums: number[]): number {
    if(!head) return 0 
    const arr = new Set(nums);
    let queue:number[] = [];
    let count = 0;
    let link = false;

    while(head){
        if(arr.has(head.val)){
            queue.push(head.val)
            if(!link){
                count++
                link = true;
            }
        }else{
            link = false;
        }
        head = head.next
    }
    return count
};