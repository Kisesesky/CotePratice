function solution(polynomial) {
    const num = (polynomial.match(/([+-]?\d*)x/g) || []);
    const con = (polynomial.match(/[+-]?\d+(?!x)/g) || []);
    let cal = num.reduce((pre, cur) => {
        if (cur === 'x') return pre + 1;
        if (cur === '-x') return pre - 1;
        return pre + parseInt(cur.replace('x', ''), 10);
    }, 0);
    let cal2 = con.reduce((pre, cur) => pre + parseInt(cur, 10), 0);
    let result = '';
    if (cal !== 0) {
        result += (cal > 0 && result ? ' + ' : '') + cal + 'x';
    }
    if (cal2 !== 0) {
        result += (cal2 > 0 && result ? ' + ' : '') + cal2;
    }
    return result || '0'; 
}

//풀이
//polynomial = [3x + 7 + x]
function solution(polynomial) {
    var answer = '';
    const x = polynomial.match(/\d*x/g) || []
    const digits = polynomial.split(' + ').filter(item=>!item.includes('x'))
    const sumX = x.reduce((prev, cur)=>{
        if(cur ==='x') return prev + 1
        return prev + Number(cur.slice(0, cur.length-1))
    }, 0)
    const sumDigits = digits.reduce((prev, cur)=> prev+Number(cur), 0)
    
    if(sumX===0)
        return sumDigits.toString()
    if(!sumDigits)
        return `${sumX===1?'':sumX}x`
    return `${sumX===1?'':sumX}x + ${sumDigits}`;
}