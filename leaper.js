function checkLeaper(years){

    if ((0 == years % 4) && (0 != years % 100) || (0 == years % 400)){
        return true;
    }
        
  
        return false;
     
  
    }
 const result1=checkLeaper(2025);
 console.log(result1);
 const result2=checkLeaper(2100);
 console.log(result2);