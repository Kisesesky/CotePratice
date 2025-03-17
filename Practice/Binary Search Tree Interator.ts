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

 class BSTIterator {
    stack : TreeNode[] =[]
    constructor(root: TreeNode | null) {
        this.pushLeft(root)
    }
    pushLeft(node: TreeNode | null ):void {
        while(node) {
            this.stack.push(node)
            node= node.left
        }
        return node.val
    }

    next(): number {
        const node = this.stack.pop()
        if(node.right) {
            this.pushLeft(node.right)
        }
    }

    hasNext(): boolean {
        return this.stack.length > 0
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */


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

 class BSTIterator2 {
    private stack:TreeNode [] = []

    constructor(root: TreeNode | null) {
        let node = root
        while(node !==null){
            this.stack.push(node)
            node = node.left
        }
    }

    next(): number {
        const parNode = this.stack.pop()!
        let node = parNode.right
        while(node !== null) {
            this.stack.push(node)
            node = node.left
        }
        return parNode.val
    }

    hasNext(): boolean {
        return this.stack.length > 0
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */