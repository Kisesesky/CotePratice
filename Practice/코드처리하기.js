function solution(code){
    let mode = 0;
    let ret ='';
    for(let i =0; i<code.length; i++){

        if(code[i]==='1'){
            mode = mode ? 0 : 1
        }
        else if(i%2 && mode){
            ret += code[i];
        }
        else if(!(i%2) && !mode){
            ret += code[i];
        }
    }
    // ret = ret ? ret: "EMPTY" 
    ret = ret || "EMPTY"
    return ret;
 }

// let act = '';
// console.log(act || 'not이네요');
