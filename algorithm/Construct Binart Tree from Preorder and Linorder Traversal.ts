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
//none
 function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if(!preorder.length || !inorder.length) return null
    const root = new TreeNode(preorder[0])
    const stack: TreeNode [] = [root]
    let idx:number = 0

    for(let i = 1; i <preorder.length; i++){
        let node = stack[stack.length -1]
        let newNode = new TreeNode(preorder[i])
        
        if(node.val !== inorder[idx]) {
            node.left = newNode
            stack.push(newNode)
        }
        else {
            while(stack.length && stack[stack.length -1].val) {
                node = stack.pop()!
                idx++
            }
            node.right = newNode
            stack.push(newNode)
        }
    }
    return root
};

//
function buildTree2(preorder: number[], inorder: number[]): TreeNode | null {
    let idx = 0
    const inorderIdx:{[key:number]:number} = {}
    for(let i =0; i< inorder.length; i++){
      inorderIdx[inorder[i]] =i
    }
    function tree(left:number, right:number): TreeNode | null {
      if(left >right) return null
  
      const val = preorder[idx++]
      const root = new TreeNode(val)
      const inIdx = inorderIdx[val]
  
      root.left = tree(left, inIdx -1)
      root.right = tree(inIdx +1, right)
  
      return root
    }
    return tree(0, inorder.length -1)
}

function buildTree2(preorder: number[], inorder: number[]): TreeNode | null {
    if(!preorder.length || !inorder.length) return null
    const root = new TreeNode(preorder[0])
    const rootIdx = inorder.indexOf(preorder[0])

    const leftInorder = inorder.slice(0, rootIdx)
    const rightInorder = inorder.slice(rootIdx +1)

    const leftPreorder = preorder.slice(1, leftInorder.length + 1)
    const rightPreorder = preorder.slice(leftInorder.length + 1)

    root.left = buildTree2(leftPreorder, leftInorder)
    root.right = buildTree2(rightPreorder, rightInorder)

    return root

}