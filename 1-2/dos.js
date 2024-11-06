let ventas = [
    {"idventa":1,"idproducto":"1","cantidad":10, "fecha":"02-01-2024","idcliente":10},
    {"idventa":2,"idproducto":"2","cantidad":2, "fecha":"02-01-2024","idcliente":7},
    {"idventa":3,"idproducto":"1","cantidad":16, "fecha":"03-01-2024","idcliente":5},
    {"idventa":4,"idproducto":"3","cantidad":32, "fecha":"03-01-2024","idcliente":7},
    {"idventa":5,"idproducto":"1","cantidad":20, "fecha":"03-01-2024","idcliente":10},
    {"idventa":6,"idproducto":"4","cantidad":2, "fecha":"04-01-2024","idcliente":1},
    {"idventa":7,"idproducto":"5","cantidad":1, "fecha":"05-01-2024","idcliente":9},
    {"idventa":8,"idproducto":"5","cantidad":1, "fecha":"05-01-2024","idcliente":2},
    {"idventa":9,"idproducto":"10","cantidad":25, "fecha":"06-01-2024","idcliente":8},
    {"idventa":10,"idproducto":"8","cantidad":3, "fecha":"06-01-2024","idcliente":2}
];
let productos = [
    {"id":"1", "nombre":"pan", "precio":10000, "categoria":"abarrotes","stock":1000},
    {"id":"2", "nombre":"mantequilla", "precio":2000, "categoria":"abarrotes","stock":200},
    {"id":"3", "nombre":"huevo", "precio":1000, "categoria":"abarrotes","stock":2000},
    {"id":"4", "nombre":"cafe", "precio":30000, "categoria":"abarrotes","stock":50},
    {"id":"5", "nombre":"te", "precio":50000, "categoria":"abarrotes","stock":100},
    {"id":"6", "nombre":"mermelada", "precio":50000, "categoria":"abarrotes","stock":60},
    {"id":"7", "nombre":"jabon", "precio":80000, "categoria":"Limpieza","stock":30},
    {"id":"8", "nombre":"pasta dental", "precio":150000, "categoria":"Limpieza","stock":40},
    {"id":"9", "nombre":"shampoo", "precio":200000, "categoria":"Limpieza","stock":20},
    {"id":"10", "nombre":"leche", "precio":110000, "categoria":"Lacteos","stock":100}
];


// reduce

let reVentas = ventas.reduce((acumulador, venta) => {
    
    if (acumulador[venta.idproducto]) {
        acumulador[venta.idproducto] += venta.cantidad;
    } else {
        acumulador[venta.idproducto] = venta.cantidad;
    }
    return acumulador;
}, {});

//console.log(reVentas);

// ---------------------map---------------
let largo = reVentas.length;
let productos2 = productos.map(function(a){
    return {
        id: a.id,
        nombre: a.nombre,
        precio: a.precio,
        categoria: a.categoria,
        stock: a.stock,
        cantVen:0
    }
})
//console.log(productos2);

// let ventas2 = ventas.map(function(a){

//     return {
//         idventa: a.idventa,
//         idproducto: a.idproducto,
//         cantidad: a.cantidad,
//         idcliente: a.idcliente,
//         acc: 0
//     }
// }) 
// console.log(ventas2);