function romanToInt(s: string): number {
    const keyvalue:Record<string, number> = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000}

    let total = 0;
    for(let i = 0; i<s.length; i++){
        let cur = keyvalue[s[i]]
        let nex = keyvalue[s[i+1]]

        if(cur < nex){
            total -= cur
        }else{
            total += cur
        }
    }
    return total
};

//reduce 활용
function romanToInt2(s: string): number {
    const keyvalue:{[key:string]:number} = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000}

    return [...s].reduce((total, current, index, array)=>{
        let value = keyvalue[current];
        let nextValue = keyvalue[array[index +1]];

        return total + (value < nextValue ? -value : value)
    },0)

}

//
function romanToInt3(s: string): number {
    const map:Record<string, number> = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000}

    const result = s.split('').reduce((pre:number, cur:string, idx:number)=>{
        if(map[cur] < map[s[idx+1]])
            return pre -map[cur];
        else
            return pre + map[cur];
    },0)
    return result
}