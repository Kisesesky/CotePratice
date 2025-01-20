function convert1(s: string, numRows: number): string {
    if(numRows === 1 || s.length <= numRows){
        return s;
    }
    let tempArr:string[] = Array(numRows).fill("");
    let step = 1;
    let current = 0;
    for(let i =0; i<s.length; i++){
        tempArr[current] += s[i]
        if(current === 0){
            step = 1;
        }else if(current === numRows-1){
            step = -1;
        }
        current +=step;
    }
    let result:string = tempArr.join('')
    

    return result;
};

// 
function convert(s: string, numRows: number): string {
    // [
    //     [1, 2, 3, 4],
    //     [2, 3, 4, 5],
    //     [2, 3, 4, 5]
    // ]
    if(numRows === 1)
        return s;
    let wayX =[0, 1];
    let wayY =[1, -1];
    let way = 0;

    let curX = 0;
    let curY = 0;
    let tempArrs = [];// [['','','','',...],['','','','',...],['','','','',...]...]
    for(let i=0; i<numRows; i++){
        let tempArr = new Array()
        tempArrs.push(tempArr);
    }

    tempArrs[0][0] = s[0]

    for(let i=1; i<s.length;){
        let nextX = curX + wayX[way%2];
        let nextY = curY + wayY[way%2];

        if(nextY >= numRows || nextY <0){
            way += 1;
            continue;
        }
        tempArrs[nextY][nextX] = s[i];
        curX = nextX;
        curY = nextY;
        i++;
    }
    return tempArrs.map(item=> item.join('')).reduce((prev,cur)=>{
        prev += cur;
        return prev;
    }, '')
};