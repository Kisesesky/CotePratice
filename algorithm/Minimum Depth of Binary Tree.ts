/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

 function minDepth(root: TreeNode | null): number {
    

    let queue = [];
    if(!root) return 0;
    
    queue.push([root, 1])
    let depth = 999999;
    while(queue.length){
        let [node, cnt] = queue.pop();
        if(node.left){
            queue.push([node.left, cnt+1])
        }
        if(node.right){
            queue.push([node.right, cnt+1])
        }
        if(!node.left && !node.right) { //leaf  단말노드인 경우
            depth = Math.min(cnt, depth)
        }
    }
    return depth;
    };