function numberOfSubstrings(s: string): number {
    let lastSeen: { [key: string]: number } = { 'a': -1, 'b': -1, 'c': -1 }; 
    let count: number = 0;

    for (let i = 0; i < s.length; i++) {
        lastSeen[s[i]] = i;

        let minIndex = Math.min(lastSeen['a'], lastSeen['b'], lastSeen['c']);

        if (minIndex >= 0) {
            count += minIndex + 1;
        }
    }

    return count;
}

//아스키코드
function numberOfSubstrings2(s: string): number {
    let cnt = 0
    let position = [-1, -1, -1]

    for(let i=0; i<s.length; i++) {
        position[s[i].charCodeAt(0)-'a'.charCodeAt(0)] = i

        if(position[0] >= 0 && position[1] >= 0 && position[2] >= 0) {
            cnt += Math.min(position[0], position[1], position[2]) + 1
        }
    }

    return cnt
}