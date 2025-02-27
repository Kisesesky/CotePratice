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

 function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if(!head) return null
    let list = new ListNode(0, head);
    let cur: ListNode | null = head;
    let length = 0;

    while(cur) {
        length++;
        cur = cur.next;
    }
    let idxNum = length - n
    cur = list

    for(let i=0; i< idxNum; i++){
        cur = cur.next
    }
    cur.next = cur.next.next

    return list.next

};

function removeNthFromEnd2(head: ListNode | null, n: number): ListNode | null {
    let temp = head
    let cnt = 0;
    while(temp.next){
        temp = temp.next
        cnt++
    }

    n = cnt - n + 1
    if(n === 0 || cnt === 0){
        head = head.next
        return head
    }
    cnt = 0
    temp = head
    while(cnt < n){
        if(cnt === n-1){
            temp.next = temp.next.next
            break
        }
        temp = temp.next
        cnt++
    }
    return head


}
