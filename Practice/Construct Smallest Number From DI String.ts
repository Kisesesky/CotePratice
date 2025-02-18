function smallestNumber(pattern: string): string {
    let temp = []; // [1,2,3,4,5,6]
    for(let i=1; i<=pattern.length+1; i++){
        temp.push(i);
    }

    let result = [];
    for(let i=0; i<temp.length; i++){
        let idx = i;
        if(i<pattern.length && pattern[i] === 'D'){
            while(i<pattern.length && pattern[idx] === 'D'){
                idx++;
            }
            result = [
                ...result,
                ...temp.slice(i, idx+1).reverse()
            ] // [1,2,3,6,5,4]

            i = idx;
        }
        else{
            result.push(temp[i])
        }
    }
    return result.join('')
};