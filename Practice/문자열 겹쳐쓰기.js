function solution(my_string, overwrite_string, s) {
    // 변수 간단설정
    let a = my_string;           //He11oWorld, length 10
    let b = overwrite_string;    //lloWorl  , length 7
    let c = Number(s);           // 2 
    
    // 조건
    let ac = a.substr(0,s)+b; // Hellow,2 = Hellowrol
                              
    let aa = ac + a.substr(-(a.length-ac.length)); // Helloworl + d;
    
   if(aa.length == a.length){
     return aa;        
   }
     return ac;
   
}
//slice 
//my_string.slice(0, s) + overwrite_string + 
//my_string.slice(s + overwrite_string.length, my_string.length +1)