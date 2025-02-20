class ListNode<T> {
    value: T;
    next: ListNode<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

class ListNodeQueue<T>{
    private head: ListNode<T> | null = null;
    private tail: ListNode<T> | null = null;
    private size: number = 0;

    enqueue(value: T) {
        const newNode = new ListNode(value);
        if(!this.tail) {
            this.head = this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++
    }

    dequeue() : T | null {
        if(!this.head)
            return null;
        const value = this.head.value;
        this.head = this.head.next;

        if(!this.head) {
            this.tail = null;
        }

        this.size--;

        return null;
    }

    getSize() {
        return this.size;
    }
}

class Graph {
    adjacencyList: Map<number, number[]> = new Map();

    addEdge(from:number, to:number) {
        if(!this.adjacencyList.has(from))
            this.adjacencyList.set(from, []);
        if(!this.adjacencyList.has(to))
            this.adjacencyList.set(to, []);

        this.adjacencyList.get(from)!.push(to);
        this.adjacencyList.get(to)!.push(from);
    }

    bfs(start:number) {
        const visted = new Set<number>();
        const queue = new ListNodeQueue<number>();

        const result: number[] = [];

        queue.enqueue(start);
        visted.add(start);

        while(queue.getSize()){
            const node = queue.dequeue();
            if(node){
                result.push(node);
                for(const item of this.adjacencyList.get(node) || [])
                {
                    if(!visted.has(item))
                    queue.enqueue(item);
                    visted.add(item);
                }
            }
        }
        return result;
    }
}

const graph = new Graph();

graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(3, 4);
graph.addEdge(2, 3);

graph.bfs(1);

