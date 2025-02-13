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

 function hasCycle(head: ListNode | null): boolean {
    let pre: ListNode = head;
    let cur: ListNode = head;

    while(cur?.next){
        pre = pre?.next;
        cur = cur?.next?.next;

        if(pre === cur){
            return true;
        }
    }
    
    return false;
};
function hasCycle2(head: ListNode | null): boolean {
    if(!head)
        return false;
    while(head.next){
    if(head.val===1000001)
        return true;
    head.val = 1000001;
    head = head.next;
    }
    return false;
};
