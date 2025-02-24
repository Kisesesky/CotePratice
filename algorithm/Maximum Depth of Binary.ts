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

 function maxDepth(root: TreeNode | null): number {
    if(root === null) return 0;

    let queue:[TreeNode, number][] = [[root, 1]]
    let depth = 0;

    while(queue.length){
        let [node, cur] = queue.pop();
        depth = Math.max(depth, cur)
        if(node.left){
            queue.push([node.left, cur +1])
        }
        if(node.right){
            queue.push([node.right, cur +1])
        }
    }
    return depth
};