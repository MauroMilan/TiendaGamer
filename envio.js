export function envio(productos, total){
    
    if(productos<3){
        
        console.log("No se permite compras menores a 3 productos");
    return Number(total);
    }else if((productos>=3)&& (productos<=10)){
        
console.log("Costo envio: $15 USD");
total=total+15;


 return Number(total);
    }else{
    console.log("Envio gratis");
    return Number(total);
 }
    }