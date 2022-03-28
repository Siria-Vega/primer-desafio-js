// Tienda online de venta de remeras, buzos y stickers

//El usuario debe elegir las cantidades de los productos que desea comprar

//El programa almacena esta información, la concatena e indica el precio total de la compra

let cantidadRemeras = parseInt (prompt("Ingrese la cantidad de remeras a comprar:"));
let cantidadBuzos = parseInt (prompt("Ingrese la cantidad de buzos a comprar:"));
let cantidadStickers = parseInt (prompt("Ingrese la cantidad de stickers a comprar:"));

let precioRemera = 1000;
let precioBuzo = 2000;
let precioSticker = 500;

let totalRemera = 0;
let totalBuzo = 0;
let totalSticker = 0;

if (cantidadRemeras !== 0){
    for(let i = 0; i < cantidadRemeras; i++){
        totalRemera = totalRemera + precioRemera;
    }
}

if (cantidadBuzos !== 0){
    for(let i = 0; i < cantidadBuzos; i++){
        totalBuzo = totalBuzo + precioBuzo;
    }
}

if (cantidadStickers !== 0){
    for(let i = 0; i < cantidadStickers; i++){
        totalSticker = totalSticker + precioSticker;
    }
}

function total (){
    let total = totalRemera + totalBuzo + totalSticker;
    return total;
}

console.log ("El monto total de su compra es: ", total());
alert("Gracias por su compra");