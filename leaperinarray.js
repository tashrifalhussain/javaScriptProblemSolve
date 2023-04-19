function findleapyear(year){
    let newarray =[];
    for(let i=0; i<year.length;i++){
        const index= i;
        const element=year[index];
        
        if ((0 == element % 4) && (0 != element % 100) || (0 == element % 400)){

         newarray.push(element);
       
        }
            
    }
return newarray;
}
const array=[2023,2025,2030,2034,2036,2000,2004];
const myYear=findleapyear(array);
console.log(myYear);