function factorial(numbers){
    let result =1;
    for(let i=numbers;i>=1;i--){
        result=result*i;
    }
    return result;
}
let some=factorial(3);
console.log(some);