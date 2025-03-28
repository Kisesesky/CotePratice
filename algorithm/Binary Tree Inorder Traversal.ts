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

 function inorderTraversal(root: TreeNode | null): number[] {
    const values: number[] = []
    function inOrder(node: TreeNode | null) {
        if(!node) return null
        inOrder(node.left)
        values.push(node.val)
        inOrder(node.right)
    }
    inOrder(root)
    return values
};