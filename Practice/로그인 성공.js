function solution(id_pw, db) {
    var answer = "fail";
    let loginId = id_pw[0];
    let loginPW = id_pw[1];
    
    db.forEach(([Id, Pw])=>{
        if(Id === loginId){
            if(Pw === loginPW){
                answer = "login";
            }else {
                answer = "wrong pw"
            }
        }
    });
        
    return answer;
}