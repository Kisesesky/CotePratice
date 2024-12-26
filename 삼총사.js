function solution (number){
    var answer = 0;
    //number =[-2,3,0,2,-5];
    //number[3] = [0] 이 되도록하려면
    for(let i=0; i<number.length -2; i++){
        for(let j=i+1; j<number.length-1; j++){
            for(let k=j+1; k<number.length; k++){
                if(number[i]+number[j]+number[k] === 0){
                    answer++;
                }
            }
        }
    }
    return answer;
}