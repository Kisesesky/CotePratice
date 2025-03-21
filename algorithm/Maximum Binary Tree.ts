function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
    function tree(left: number, right: number): TreeNode | null {
        if(left> right) return null

        let idx = left
        for(let i= left+1; i <=right; i++){
            if(nums[i] > nums[idx]) {
                idx = i
            }
        }
        const root = new TreeNode(nums[idx])
        root.left = tree(left, idx -1)
        root.right = tree(idx +1, right)

        return root
    }
    return tree(0, nums.length -1)
}

function constructMaximumBinaryTree2(nums: number[]): TreeNode | null {
    if(nums.length === 0) return null
    const stack: TreeNode[] = []

    for(let num of nums) {
        let cur = new TreeNode(num)

        while(stack.length > 0 && stack[stack.length -1].val < num){
            cur.left = stack.pop()!
        }
        if(stack.length >0){
            stack[stack.length -1].right = cur
        }
        stack.push(cur)
    }
    return stack.length > 0 ? stack[0] : null
}

function constructMaximumBinaryTree3(nums: number[]): TreeNode | null {
    if(!nums.length) return null
    // const max = Math.max(...nums)
    // const maxIdx = nums.indexOf(max)

    let max = -1
    let maxIdx = -1
    for(let i =0; i<nums.length; i++) {
        if(max<nums[i]) {
            max = nums[i]
            maxIdx = i
        }
    }

    const root = new TreeNode(max)
    root.left = constructMaximumBinaryTree3(nums.slice(0, maxIdx))
    root.right = constructMaximumBinaryTree3(nums.slice(maxIdx+1))

    return root
}