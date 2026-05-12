const productos=["Mouse", "Teclado", "Monitor", "Audifonos"];
let nuevoProducto="Silla Gamer";
let productoBuscar="Mouse";
function mostrarInventario(arr){
    let i=0;
  arr.forEach(producto => {
    console.log(`${i+1}. ${producto}`);
    i++
  });
   
}


function agregarProducto(arr, producto){
arr.push(producto);
mostrarInventario(arr);
}

function eliminarUltimoProducto(arr){
arr.pop();
mostrarInventario(arr);
}



function remplazarProducto(arr, indice, nuevoProducto){
arr.splice(indice, 1, nuevoProducto);
mostrarInventario(arr);
}



function buscarProducto(arr, producto){
console.log(arr.indexOf(producto));
}


function ordenarProductos(arr){
arr.sort();
mostrarInventario(arr);
}


function mostrarCantidad(arr){
console.log("La cantidad de productos es :", arr.length);
}


console.log("Inventario actual:");
mostrarInventario(productos);

console.log(`Producto agregado ${nuevoProducto}`);

console.log("Inventario actualizado:");
agregarProducto(productos, nuevoProducto);

console.log(`Producto eliminado: ${nuevoProducto}`);
console.log("Inventario actualizado:");

eliminarUltimoProducto(productos);

console.log(`Producto ${productoBuscar} encontrado en indice: `);
buscarProducto(productos, productoBuscar);

console.log("Inventario ordenado: ");

ordenarProductos(productos);
