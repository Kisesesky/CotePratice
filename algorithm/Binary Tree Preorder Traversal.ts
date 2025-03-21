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

 function preorderTraversal(root: TreeNode | null): number[] {
    const values: number[] = []
    function preOrder(node: TreeNode | null) {
        if(!node) return null
        values.push(node.val)
        preOrder(node.left)
        preOrder(node.right)
    }
    preOrder(root)
    return values
};