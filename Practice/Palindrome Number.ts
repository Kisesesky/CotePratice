function isPalindrome(x: number): boolean {
    // 121 121 true
    // 123 321 false
    let strX:string = x.toString()
    if(!strX)
        throw new Error('Not found x')
    let reverseX:string = strX.split('').reverse().join('')
    if(x <0){
        return false;
    }else{
        return strX === reverseX
    }
};

function isPalindrome(x: number): boolean {
    if(x<0)
        return false
    const arr = x.toString().split('')
    while(arr.length>1){
        if(arr.shift() !== arr.pop())
            return false
    }
};