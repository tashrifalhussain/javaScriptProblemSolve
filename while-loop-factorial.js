function factorial(number){
    let result=1;
    let a=number;
    
    while(a >=1){
        result=result*a;
        a--;
;
    }
    return result;
}
const some=factorial(5);
console.log(some);