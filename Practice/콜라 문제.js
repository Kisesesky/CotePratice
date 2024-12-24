//한줄시도;;;
const solution = (a, b, n) => { while (n >= a) n = (n % a) + Math.floor(n / a) * b; return n; };

const solution = (a, b, n) => {
    let answer = 0;
    while (n >= a) {
        let change = Math.floor(n / a);
        answer += change * b;
        n = (n % a) + (change * b);
    }
    return answer;
};