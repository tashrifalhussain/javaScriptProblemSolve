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









function oddSumFindOddNumbers(numbers){
    const a = [];
   
for(let i=0;i<numbers.length;i++){
    const index =i;
    const element =numbers[index];
    if(element %2 !==0){
        
        a.push(element);
      
        console.log(index,element);
    }
    

}
return a;
}
const array=[31,55,60,65,70,80,90];
 const a=oddSumFindOddNumbers(array);
 console.log(a);
 
 let b= getsum(a);
 console.log(b);
 