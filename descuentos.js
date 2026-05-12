export function calcularDescuento(dinero){
  
    let total=0;
if(dinero<200){
 console.log(`te falta $${200-dinero} para promocion`);
return Number(dinero);
}else if(dinero>=200 || dinero <=500){
  total=dinero*.05;
  
  
  
    console.log(`Se aplcia el 5% de descuento`);
   
    return Number(total);
    
}else if(dinero>500){
    total=dinero*.12;
    
console.log(`Se aplica el 12%`);
return Number(total);
}

}