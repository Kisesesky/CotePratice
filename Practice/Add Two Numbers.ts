function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if(!l1 || !l2) return null
    const arr1:number[] = []
    const arr2:number[] = []
    while(l1)
        arr1.push(l1.val)
        l1 = l1.next
    while(l2)
        arr2.push(l2.val)
        l2 = l2.next
    
    const num1:number = +arr1.reverse().join('')
    const num2:number = +arr2.reverse().join('')
    console.log(num1+num2)
    
};