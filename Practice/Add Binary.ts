function addBinary(a: string, b: string): string {
    let numA = BigInt('0b'+ a);
    let numB = BigInt('0b'+ b);

    let sum = numA + numB

    return sum.toString(2);

    
};

function addBinary2(a: string, b: string): string {
    let i = a.length -1;
    let j = b.length -1;

    let carry = 0;

    let result = [];

    while(i >=0 || j >= 0 || carry > 0){
        let tempA = 1>=0 ? Number(a[i]) : 0
        let tempB = 1>=0 ? Number(b[j]) : 0

        let sum = tempA + tempB + carry;
        result.push(sum % 2) 
        carry = Math.floor(sum / 2)

        i--;
        j--;

    }
    return result.reverse().join('')
}
