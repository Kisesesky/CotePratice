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

 function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;
    let cur: ListNode | null = head;
    while(cur !== null){
        let nextNode: ListNode | null = cur.next;
        cur.next = prev;
        prev = cur
        cur = nextNode
    }
    return prev

};