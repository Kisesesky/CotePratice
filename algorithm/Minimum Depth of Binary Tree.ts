

let queue = [];
if(!root) return 0;

queue.push([root, 1])
let depth = 999999;
while(queue.length){
    let [node, cnt] = queue.pop();
    if(node.left){
        queue.push([node.left, cnt+1])
    }
    if(node.right){
        queue.push([node.right, cnt+1])
    }
    if(!node.left && !node.right) { //leaf  단말노드인 경우
        depth = Math.min(cnt, depth)
    }
}
return depth;