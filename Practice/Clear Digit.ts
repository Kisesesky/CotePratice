function clearDigits(s: string): string {
    let closest = -1;

    for(let i=0; i<s.length; i++){
        if(s.charCodeAt(i) >= 48 && s.charCodeAt(i) <=57){
            if(closest>=){
                s.slice(0, closest) + s.slice(closest+2)
                closest = -1;
            }
            else{
                s = s.slice(i+1)
            }
            i = -1
        }else{
            closest = i
        }
    }
    return s
};

//정규 표현식
function clearDigits2(s: string): string {
    while(/\d/.test(s)){
        s = s.replace(/.[0-9]/,'') 
    }
    return s
};