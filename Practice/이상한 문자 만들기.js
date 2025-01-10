function solution(s) {
    var answer = '';
    let word = s.split(' ')
    let wordUpper = word.map(word => {
        let arr = ''
        for(let i = 0; i < word.length; i++){
        if(i % 2 === 0){
            arr += word[i].toUpperCase()
        }else{
            arr += word[i].toLowerCase()
        }
    }
        return arr
    })
    
    return wordUpper.join(' ');
}