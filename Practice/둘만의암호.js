function solution(s, skip, index) {
    var answer = '';
    let skipSet = new Set(skip.split('').map(item=>item.charCodeAt(0))) // [119, 98, 113, 100]
    return s.split('').map(item=> {
        let current = item.charCodeAt(0)
        for(let i=0; i<index;){
            current += 1
            if(current>122) // z를 넘어서면
                current = 97 // a로 할당
            
            if(!skipSet.has(current))
                i++;
        }
        return String.fromCharCode(current) //ascii => string
    }).join('') // array => string
    
    return answer;
}