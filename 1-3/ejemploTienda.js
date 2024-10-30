// se crea el objeto --------------------------------

let producto = {
    "id": 1,
    "nombre": "Smartphone X",
    "precio": 599.99,
    "categoria": "Electrónica",
    "especificaciones": {
      "marca": "TechBrand",
      "modelo": "X-2000",
      "almacenamiento": "128GB"
    }
}
// copia del objeto --------------------------------

let productoClonado = JSON.parse(JSON.stringify(producto));
productoClonado.especificaciones.modelo = "X-2001";
console.log("\nProducto original después de modificar el clon:");
console.log(JSON.stringify(producto, null, 2));
console.log("\nProducto clonado:");
console.log(JSON.stringify(productoClonado, null, 2));

// marge o fucion --------------------------------

let actualizacion = {
    "precio": 549.99,
    "enStock": true,
    "colores": ["Negro", "Plata"]
};
let productoActualizado = { ...producto, ...actualizacion };
console.log("\nProducto actualizado después del merge:");
console.log(JSON.stringify(productoActualizado, null, 2));

// recorrer el objeto --------------------------------

console.log("\nRecorriendo el objeto actualizado:");
 for (let [clave, valor] of Object.entries(productoActualizado)) {
  if (typeof valor !== 'object') {
    console.log(`${clave}: ${valor}`);
  } else {
    console.log(`${clave}: ${JSON.stringify(valor)}`);
  }
 }
// objeto a string y luego a objeto --------------------------------

let productoString = JSON.stringify(productoActualizado);
console.log("\nProducto como string JSON:");
console.log(productoString);
let productoParseado = JSON.parse(productoString);
console.log("\nProducto parseado de vuelta a objeto:");
console.log(productoParseado);
