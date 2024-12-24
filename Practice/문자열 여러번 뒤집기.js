//r e r m g o r p s a m [2,3] index[2]순서를 index[3]순서로
function solution(my_string, queries) {
   queries.forEach(item => {
    let str1 = my_string.slice(0, item[0]) //index 0~1
    let str2 = my_string.slice(item[0], item[1]+1).split('').reverse().join('')
    let str3 = my_string.slice(item[1]+1, my_string.length)

    my_string = str1 + str2 + str3
   })
   return my_string;
}

function solution(my_string, queries) {
   let qur = queries;
   let str = my_string;
   for(let i = 0; i<qur.length; i++){
     let mstr = str.slice(qur[i][0],qur[i][1]+1).split('').reverse().join('');
     let fstr = str.slice(0,qur[i][0]);
     let estr = str.slice(qur[i][1]+1,str.length);
     str =fstr+mstr+estr;
       
   }
   return  str;
}