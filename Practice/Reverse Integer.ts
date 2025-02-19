function reverse(x: number): number {
    let a = Math.abs(x)
    let result = 0;

    while(a > 0){
        result = result * 10 + (a % 10)
        a = Math.floor(a / 10)
    }
    if(result >= Math.pow(2, 31)) return 0; //overflow 방지
    if(x <0){
        result = -result
    }

    return result
};


