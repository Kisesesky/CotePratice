function longestCommonPrefix1(strs: string[]): string {
    let preArr = strs[0]
    for(let i = 0; i<strs.length; i++){
        while(strs[i].indexOf(preArr) !== 0){
            preArr = preArr.slice(0, -1);
        }
    }
    return preArr;
}

//
function longestCommonPrefix(strs: string[]): string {
    let max = "";
    for(let i=0; i<strs[0].length; i++){
        if(strs.every(item => strs[0].slice(0, i+1) === item.slice(0, i+1))){
            max = strs.slice(0, i+1)
        }
        else break;
    }
    return max;
};