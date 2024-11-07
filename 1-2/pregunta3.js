let productos = [
    {"id":1, "nombre":"pan", "precio":100, "categoria":"abarrotes","stock":1000},
    {"id":2, "nombre":"mantequilla", "precio":2000, "categoria":"abarrotes","stock":200},
    {"id":3, "nombre":"huevo", "precio":100, "categoria":"abarrotes","stock":2000},
    {"id":4, "nombre":"cafe", "precio":3000, "categoria":"abarrotes","stock":50},
    {"id":5, "nombre":"te", "precio":500, "categoria":"abarrotes","stock":100},
    {"id":6, "nombre":"mermelada", "precio":500, "categoria":"abarrotes","stock":60},
    {"id":7, "nombre":"jabon", "precio":800, "categoria":"Limpieza","stock":30},
    {"id":8, "nombre":"pasta dental", "precio":1500, "categoria":"Limpieza","stock":40},
    {"id":9, "nombre":"shampoo", "precio":2000, "categoria":"Limpieza","stock":20},
    {"id":10, "nombre":"leche", "precio":1100, "categoria":"Lacteos","stock":100}
] 

let ventas = [
    {"idventa":1,"idproducto":1,"cantidad":10, "fecha":"02-01-2024","idcliente":10},
    {"idventa":2,"idproducto":2,"cantidad":2, "fecha":"02-01-2024","idcliente":7},
    {"idventa":3,"idproducto":1,"cantidad":16, "fecha":"03-01-2024","idcliente":5},
    {"idventa":4,"idproducto":3,"cantidad":32, "fecha":"03-01-2024","idcliente":7},
    {"idventa":5,"idproducto":1,"cantidad":4, "fecha":"03-01-2024","idcliente":10},
    {"idventa":6,"idproducto":4,"cantidad":2, "fecha":"04-01-2024","idcliente":1},
    {"idventa":7,"idproducto":5,"cantidad":1, "fecha":"05-01-2024","idcliente":9},
    {"idventa":8,"idproducto":5,"cantidad":1, "fecha":"05-01-2024","idcliente":2},
    {"idventa":9,"idproducto":10,"cantidad":10, "fecha":"06-01-2024","idcliente":8},
    {"idventa":10,"idproducto":8,"cantidad":3, "fecha":"06-01-2024","idcliente":2}
]

let clientes = [
    {"idcliente":1,"nombreCliente":"Juan", "email":"juan@gmail.com"},
    {"idcliente":2,"nombreCliente":"Pedro", "email":"Pedro@gmail.com"},
    {"idcliente":3,"nombreCliente":"luis", "email":"luis@gmail.com"},
    {"idcliente":4,"nombreCliente":"pepe", "email":"pepe@gmail.com"},
    {"idcliente":5,"nombreCliente":"Jose", "email":"Jose@gmail.com"},
    {"idcliente":6,"nombreCliente":"victor", "email":"victor@gmail.com"},
    {"idcliente":7,"nombreCliente":"claudio", "email":"claudio@gmail.com"},
    {"idcliente":8,"nombreCliente":"alicia", "email":"alicia@gmail.com"},
    {"idcliente":9,"nombreCliente":"veronica", "email":"veronica@gmail.com"},
    {"idcliente":10,"nombreCliente":"cecilia", "email":"cecilia@gmail.com"}
]
//-------------------crea objeto de cant. venta x id producto ------------
let vtaxprod = {};
ventas.forEach(venta => {
    if(!vtaxprod[venta.idproducto]){
        vtaxprod[venta.idproducto] = 0;
    }
        vtaxprod[venta.idproducto] += venta.cantidad;
})
//console.log(vtaxprod);
//------------------ nuevo objeto con producto completo + cant. vendida

let ventaProducto = productos.map(prod => {
    return {
        ...prod,
        cantVent: vtaxprod[prod.id] || 0
    };

    }
    )
console.log(ventaProducto);

//---------------------------reduce---monto por categoria-------------------
let vtaxcat = ventaProducto.reduce((acumulador, venta) => {
    
    if (!acumulador[venta.categoria]) {
        acumulador[venta.categoria] = 0;
    }
    acumulador[venta.categoria] += venta.cantVent * venta.precio;
    
    return acumulador;
}, {});
console.log(vtaxcat);