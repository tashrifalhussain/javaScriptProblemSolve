function getsum(numbers)

{
    let sum=0;
   for(let i=0;i<numbers.length;i++){
    const index = i;
    const element = numbers[index];
  sum = sum+element;
    // console.log(index,element,sum);
   }
   return sum; 
}
const myNumber=[10,20,50,60,70,75,100];
 let a= getsum(myNumber);
