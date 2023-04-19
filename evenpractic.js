function isEven(number){
const remainder=number%2;
if(remainder==0){
    // console.log('this is even number');
    return true;
}
else{
    // console.log('this is odd number');
    return false;
}

}
 const result1=isEven(100);
 console.log(result1);
 const result2 =isEven(87);
 console.log(result2);