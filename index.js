import {  calcularDescuento  } from  "./descuentos.js";
import {envio} from "./envio.js";
import {esVIP} from "./vip.js"

let nombre= prompt("Dame tu nombre:");
let cantidadProductos= Number(prompt("Dame la cantidad de productos"));
let total=500;
let monto=0;

console.log(`Hola ${nombre}`);

monto=envio(cantidadProductos, total);

monto=monto-calcularDescuento(monto);
console.log("Nuevo total: "+monto)
