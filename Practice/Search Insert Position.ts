function karatsuba(num1: string, num2: string): string {
    if (num1.length < 9 || num2.length < 9) {
        const resultnum = +num1 * +num2;
        return resultnum.toString();
    }

        let m: number = Math.floor(Math.min(num1.length, num2.length) / 2); 

        let a: number = Math.floor(+num1 / Math.pow(10, m));
        let b: number = +num1 % Math.pow(10, m);
        let c: number = Math.floor(+num2 / Math.pow(10, m));
        let d: number = +num2 % Math.pow(10, m);
    
        let z2 = karatsuba(a.toString(), c.toString());
        let z0 = karatsuba(b.toString(), d.toString());
        let z1 = karatsuba((a + b).toString(), (c + d).toString());
    
        let z1Num = Number(z1) - Number(z2) - Number(z0);
    
        return (Number(z2) * Math.pow(10, 2 * m) + z1Num * Math.pow(10, m) + Number(z0)).toString();
}
    

//
function multiply(num1: string, num2: string): string {
    const arr= new Array(num1.length + num2.length).fill(0)
    for(let i=num1.length-1; i>=0; i--){
        for(let j=num2.length-1; j>=0; j--){
            const mul = +num1[i] * +num2[j]
            const sum = arr[i+j+1] + mul % 10
            arr[i+j+1] = sum % 10;
            arr[i+j] += Math.floor(sum / 10)
        }
    }
    while(arr[0] === 0)
        arr.shift();
    
    return arr.length ? arr.join('') : "0"
};
//
function multiply3(num1: string, num2: string): string {
    let strnum = parseInt(num1) * parseInt(num2);
    let resultnum = strnum.toString()
    if(num1.length < 9 || num2.length < 9)
        return resultnum
    let result = new Array(num1.length + num2.length).fill(0);
    for(let i = num1.length -1; i>=0; i--){
        for(let j = num2.length -1; j>=0; j--){
            let mul = parseInt(num1[i]) * parseInt(num2[j]);
            let sum = mul + result[i + j + 1];
            result[i + j + 1] = sum % 10;
            result[i +j] +=Math.floor(sum / 10);
        }
    }
    let strResult = result.join('')
    return strResult[0] === '0' ? strResult.slice(1) : strResult;
};