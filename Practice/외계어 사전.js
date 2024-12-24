function solution(spell, dic) {
    var answer = 0;
    let spellList = spell.sort().join('');
    for(let i = 0; i<dic.length; i++){
        if(spellList === dic[i].split('').sort().join('')){
            return 1;
        }
    }
    return 2;
  
   
}

//풀이
function solution(spell,dic){
    var answer = 0;
    let sw = false
    dic.forEach(item =>{
        spell.every(i=>item.includex(i)) ? sw = true: {}
    })
    return sw?1:2;
}