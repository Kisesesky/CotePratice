//시간초과로 뜨는코드;;
function solution(ingredient) {
    var answer = 0;
    let str = ingredient.join('');
    // console.log(str)
    while(str.includes('1231')) {
        str = str.replace('1231','');
        answer++
    }
    return answer;
}
//while때문에 무한루프로 진행되는듯;;

//for로 전환
function solution(ingredient) {
    var answer = 0;
    
    for(let i=0; i<ingredient.length; i++){
        if(ingredient.slice(i, i+4).join('') === '1231'){ //4개를 끊었을때 1231이 나오는지;
            answer++;
            ingredient.splice(i,4);
            i-=3;
        }
    }
    return answer;
}

//틀린답안 해설
function solution(ingredient){
    var answer = 0;
    let temp = ingredient.join('')

    while(true){
        let tempStr = temp
        temp = temp.replace('1231','') // 시간복잡도  0(n^2)으로 걸림

        if(tempStr === temp)
            break;
        answer++;
    }
}
//풀이
function solution(ingredient){
    var answer = 0;
    let tempArr =[];
    for(let i=0; i<ingredient.length; i++){
        tempArr.push(ingredient[i])// [2] [2,1] [2,1,1] [2,1,1,2]순으로 증가
        if(i>=4){
            let temp = tempArr.slice(tempArr.length -4, tempArr.length).join('') //2112
            if(temp ==='1231'){
                tempArr.splice(tempArr.length -4, tempArr.length)
                answer++;
            }

        }
    }
    return answer;
}