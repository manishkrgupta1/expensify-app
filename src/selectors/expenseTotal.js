


export default (expenses) =>{
    
    let sum=expenses.reduce((acc,val)=>{
        return acc = acc + val.amount},0);
   
     return sum;
    
};