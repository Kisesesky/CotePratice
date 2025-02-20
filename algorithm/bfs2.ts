let queue = [];


class GrapH {
    adjancyList: Map<number, number[]>

    addEdge(from:number, to:number){
        if(!this.adjancyList.has(from)){
            this.adjancyList.set(from, [])
        }
        if(!this.adjancyList.has(to)){
            this.adjancyList.set(to, [])
        }
        this.adjancyList.get(from)!.push(to)
        this.adjancyList.get(to)!.push(from)

    }

    bfs(start: number) {
        const visted = new Set<number>()
        const queue: number[] = [];
        const result: number[] = [];

        queue.push(start)
        visted.add(start)

        while(queue.length){
            const edge = queue.shift()
            if(edge){
                result.push(edge)
                for(const item of this.adjancyList.get(edge) || []){
                    if(!visted.has(item)){
                        queue.push(item)
                        visted.add(item)
                    }
                }
            }

        }
        return result
    }
}