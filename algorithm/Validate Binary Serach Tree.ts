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

 function isValidBST(root: TreeNode | null): boolean {
    let queue =[];

    if(!root) return true

    queue.push([root, -Math.pow(2, 31) -1, Math.pow(2, 31)])

    while(queue.length){
        let [node, min, max] = queue.shift();

        if(node.left){
            if(node.left.val >= node.val || node.left.val <= min)
                return false
            queue.push([node.left, min, node.val])
        }
        
        if(node.right){
            if(node.right.val <= node.val || node.right.val >= max)
                return false
            queue.push([node.right, node.val, max])
        }
    }
    return true;

};