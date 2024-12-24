function solution(chicken) {
    let couponServece = 0;
    let coupon = chicken;
    
    while(coupon >= 10){
        let freeChicken = Math.floor(coupon / 10);
        couponServece += freeChicken;
        coupon = (coupon % 10) + freeChicken
    }
    
    return couponServece;
}

//풀이
function solution(chicken) {
    var answer = 0;
    while(chicken > 9){
        answer += Math.floor(chicken / 10)
        chicken = Math.floor(chiken / 10) + chicken%10
    }
    return answer;
}