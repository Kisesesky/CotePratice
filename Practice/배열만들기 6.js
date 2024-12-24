function solution(arr) {
//0과 1로만 이루어진 정수 배열 arr가 주어집니다. arr를 이용해 새로운 배열 stk을 만드려고 합니다.  
let stk = [];

//i의 초기값을 0으로 설정하고 i가 arr의 길이보다 작으면 다음을 반복합니다. 
//let i = 0, i<arr.length

//만약 stk이 빈 배열이라면 arr[i]를 stk에 추가하고 i에 1을 더합니다. for문
for(let i = 0; i<arr.length; i++){
    if(stk.length === 0){
        stk.push(arr[i]);
   
        

//stk에 원소가 있고, stk의 마지막 원소가 arr[i]와 같으면 stk의 마지막 원소를 stk에서 제거하고 i에 1을 더합니다.
if(stk[stk.length - 1] === arr[i]){stk.pop();
//stk에 원소가 있는데 stk의 마지막 원소가 arr[i]와 다르면 stk의 맨 마지막에 arr[i]를 추가하고 i에 1을 더합니다.
stk.push(arr[i])
//위 작업을 마친 후 만들어진 stk을 return 하는 solution 함수를 완성해 주세요.

//단, 만약 빈 배열을 return 해야한다면 [-1]을 return 합니다.
return stk.length === 0 ? [-1] : stk;

function solution(arr) {
    
    let stk =[]; //빈배열만들기
        
    for(let i = 0; i<arr.length; i++){
        if(stk.length === 0){
            stk.push(arr[i]); //1번 지문
        } else if(stk[stk.length - 1] === arr[i]){
            stk.pop(); // 2번 지문
        } else{
            stk.push(arr[i]); // 3번 지문
        }
    }return stk.length === 0 ? [-1] : stk;
        
}

//forEach 방법으로
function solution(arr){
    let stk = [];
    arr.forEach(item => {
        if(!stk.length){ //0일때 if문 발동
        stk.push(item);
        return;
        }else if(stk[stk.length-1] === item){ // -1일경우 마지막 원소
            stk.pop();
            return;
        }else if(stk[stk.length-1] !== item){
            stk.push(item);
            return;
        }
    })
    return stk.length? stk :[-1];
}
