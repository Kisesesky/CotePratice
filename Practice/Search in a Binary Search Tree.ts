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

 function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    if(!root) return null
    while(root && root.val !== val) {
        root = val < root.val ? root.left : root.right
    }
    return root
};