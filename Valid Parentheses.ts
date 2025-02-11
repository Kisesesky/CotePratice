function isValid(s: string): boolean {
    let stack:string[] = [];

    for(let char of s){
        if(char === '(' || char === '{' || char === '['){
            stack.push(char)
        }else{
            let last = stack.pop();
            if( (char === ')' && last !== '(') || 
                (char === '}' && last !== '{') || 
                (char === ']' && last !== '[')){
                return false;
            }
        }
    }
    return stack.length === 0;
};