function solution(a,b,c,d){
    let arr= [a,b,c,d];

    let result = arr.reduce((pre, cur)=>{
        pre[cur] = pre[cur] ? pre[cur]+1: 1

        return pre;
    },{})
    
    const newResult = Object.keys(result).sort((a,b)=>result[b]-result[a])



    if(result[newResult[0]] === 4){
        let p = Number(newResult[0]);
        return p * 1111
    }
    else if (result[newResult[0]] === 3){

        let p = Number(newResult[0]);
        let q = Number(newResult[1]);
        return Math.pow(p * 10 + q, 2);
    }

    else if (result[newResult[0]] === 2 && result[newResult[1]]===2){

        let p = Number(newResult[0]);
        let q = Number(newResult[1]);
        return (p+q)*Math.abs(p-q) 
    }

    else if (result[newResult[0]] === 2){
        let q = Number(newResult[1]);
        let r = Number(newResult[2]);
        return q * r
    }
    else{
        return Number(newResult.sort()[0])
    }

}