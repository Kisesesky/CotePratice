function solution(order) {
    var orderPrice = 0;
    const price ={
        americano : 4500,
        cafelatte : 5000,
        anything : 4500
    };
    for(let i =0; i < order.length; i++){
        const menu = order[i];
        answer += price[menu];
    }
    
    return orderPrice;
}

//풀이

function solution(oder){
    var orderPrice = 0;
    oder.forEach(item =>{
        if(item.includes('americaso') || item ==='anything'){
            orderPrice += 4500;

        }else if(item.includes('cafelatte')){
            orderPrice += 5000;
        }
    })
    return orderPrice;


}