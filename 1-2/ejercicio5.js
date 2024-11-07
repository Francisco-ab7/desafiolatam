let productos = [
    {"id":1, "nombre":"pan", "precio":10000, "categoria":"abarrotes","stock":15},
    {"id":2, "nombre":"mantequilla", "precio":20000, "categoria":"abarrotes","stock":200},
    {"id":3, "nombre":"huevo", "precio":10000, "categoria":"abarrotes","stock":2},
    {"id":4, "nombre":"cafe", "precio":30000, "categoria":"abarrotes","stock":50},
    {"id":5, "nombre":"te", "precio":50000, "categoria":"abarrotes","stock":100},
    {"id":6, "nombre":"mermelada", "precio":50000, "categoria":"abarrotes","stock":60},
    {"id":7, "nombre":"jabon", "precio":80000, "categoria":"Limpieza","stock":30},
    {"id":8, "nombre":"pasta dental", "precio":150000, "categoria":"Limpieza","stock":40},
    {"id":9, "nombre":"shampoo", "precio":200000, "categoria":"Limpieza","stock":19},
    {"id":10, "nombre":"leche", "precio":110000, "categoria":"Lacteos","stock":1}
] 
let ventas = [
    {"idventa":1,"idproducto":1,"cantidad":10, "fecha":"02-01-2024","idcliente":10},
    {"idventa":2,"idproducto":2,"cantidad":2, "fecha":"02-01-2024","idcliente":7},
    {"idventa":3,"idproducto":1,"cantidad":16, "fecha":"03-01-2024","idcliente":5},
    {"idventa":4,"idproducto":3,"cantidad":50, "fecha":"03-01-2024","idcliente":7},
    {"idventa":5,"idproducto":1,"cantidad":4, "fecha":"03-01-2024","idcliente":10},
    {"idventa":6,"idproducto":4,"cantidad":2, "fecha":"04-01-2024","idcliente":1},
    {"idventa":7,"idproducto":5,"cantidad":1, "fecha":"05-01-2024","idcliente":9},
    {"idventa":8,"idproducto":5,"cantidad":10, "fecha":"05-01-2024","idcliente":2},
    {"idventa":9,"idproducto":10,"cantidad":6, "fecha":"06-01-2024","idcliente":8},
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
// ------------------------ ejercicio 5 ----------------------

let reportinv = productos.map((stockprod)=> {
    let msn = ''   
    if (stockprod.stock < 10){
        msn = 'Low' };
    if (stockprod.stock > 10 && stockprod.stock  < 20 ){
        msn = 'In Stock' };
    if (stockprod.stock > 20){
        msn = 'Enough Stock' };

        return {  
            Nombre:stockprod.nombre,
            Categoria:stockprod.categoria,
            Stock:stockprod.stock,
            Status:msn,
         }
        
})
console.log(reportinv);