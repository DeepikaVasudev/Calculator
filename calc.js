
const displayData=(arg)=>
    {
       result.value+=arg;
       
    }
    
    const clearValues=()=>
    {
       result.value="";
    }
    
    const clearLast=()=>
    {
      let last= result.value;
      result.value=last.slice(0,-1);
    }
    
    const calcResult=()=>
    {
       try{
          result.value=eval(result.value);
    
       }catch{
          result.value="Invalid Expression !!!"
       }
       
    }