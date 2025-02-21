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

 class FindElements {
    root: TreeNode | null
    constructor(root: TreeNode | null) {
        this.root = root;
    }

    find(target: number): boolean {
        this.root.val = 0;
        if(this.root.val === target)
            return true;
        let queue:TreeNode[] = [];
        queue.push(this.root);

        while(queue.length){
            let node = queue.pop()

            if(node.left){
                node.left.val = 2 * node.val +1
                if(node.left.val === target)
                    return true
                queue.push(node.left)
            }
            
            if(node.right){
                node.right.val = 2 * node.val +1
                if(node.right.val === target)
                    return true
                queue.push(node.right)
            }
        }
    }
}

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */