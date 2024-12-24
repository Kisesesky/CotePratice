function solution(keyinput, board) {
    var answer = [0,0];
    let array = {left : [-1,0], right : [1,0], down : [0,-1], up : [0,1]}
    let replace = keyinput.map(key => array[key]);
    
    let maxX = parseInt(board[0] / 2);
    let maxY = parseInt(board[1] / 2);
    
    keyinput.forEach(key=>{
        let [x, y] = array[key];
        answer[0] += x;
        answer[1] += y;
        answer[0] = Math.max(-maxX, Math.min(answer[0], maxX));
        answer[1] = Math.max(-maxY, Math.min(answer[1], maxY));
        
    });
    
    return answer;
}

//풀이
function solution(keyinput, board){
    var answer =[0,0];
    keyinput.forEach(item =>{
        if(item ==='left'&&-answer[0]<board[0]/2){
            answer[0] -= 1
        }
        else if(item ==='right' && answer[0]<board[1]/2){
            answer[0]+=1
        }
        else if(item === 'up'&& answer[1]<board[1]/2){
            answer[1] +=1
        }
        else if(item === 'down'&&-answer[1]<board[1]/2){
            answer[1] -= 1
        }
    })

    return;
}