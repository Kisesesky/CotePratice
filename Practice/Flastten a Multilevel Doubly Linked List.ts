/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     prev: _Node | null
 *     next: _Node | null
 *     child: _Node | null
 *     
 *     constructor(val?: number, prev? : _Node, next? : _Node, child? : _Node) {
 *         this.val = (val===undefined ? 0 : val);
 *         this.prev = (prev===undefined ? null : prev);
 *         this.next = (next===undefined ? null : next);
 *         this.child = (child===undefined ? null : child);
 *     }
 * }
 */


 function flatten(head: _Node | null): _Node | null {
    if(!head) {
        return null;
    }

    let current: _Node | null = head;

    while(current){
        if(current.child){
            let child = current.child;
            let next = current.next;

            current.next = child;
            child.prev = current;
            current.child = null;

            while(child.next){
                child = child.next;
            }
            if(next){
                child.next = next;
                next.prev = child
            }
        }
        current = current.next
    }
    return head;
};


function flatten2(head: _Node | null) : _Node | null {
    if(!head) return null;

    let temp = head;
    let tempList:_Node[] = [];

    while(temp){
        if(temp.child){
            if(temp.next)
                tempList.push(temp.next)
            temp.next = temp.child
            temp.next.prev = temp;
            temp.child = null;
        }
        else if(!temp.next && tempList.length >=1){
            let newNode = tempList.pop()
            temp.next = newNode;
            newNode.prev = temp;
        }
        temp = temp.next;    
        

    }
    return head;
};