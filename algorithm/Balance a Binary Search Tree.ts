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

 function balanceBST(root: TreeNode | null): TreeNode | null {
    if(!root) return null
    const val:number[] = []
    const stack:TreeNode[] = []
    let cur = root
    while(stack.length > 0 || cur !== null){
        while(cur !== null){
            stack.push(cur)
            cur = cur.left
        }
        cur = stack.pop()!
        val.push(cur.val)
        cur = cur.right
    }
    const Tree = (left: number, right: number): TreeNode | null => {
        if (left > right) return null;

        const mid = Math.floor((left + right) / 2);
        const node = new TreeNode(val[mid]);

        node.left = Tree(left, mid - 1);
        node.right = Tree(mid + 1, right);

        return node;
    }

    return Tree(0, val.length - 1); 
};

function balanceBST2(root: TreeNode | null): TreeNode | null {
    const values = []
    function inOrder(node: TreeNode | null) {
        if(!node)
            return
        inOrder(node.left)
        values.push(node.val)
        inOrder(node.right)
    }
    inOrder(root)

    function buildTree(left: number, right: number): TreeNode | null {
        if(left > right)
            return null
        const mid = (left + right) >> 1
        const tree = new TreeNode(values[mid])
        tree.left = buildTree(left, mid-1)
        tree.right = buildTree(mid+1, right)

        return tree
    }
    return buildTree(0, values.length -1)
}