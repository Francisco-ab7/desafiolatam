// Clonacion ----------------------------------------
const original = { 
    "nombre": "Juan",
    "direccion": {
      "ciudad": "Madrid",
      "codigoPostal": "28001"
    }
   };
   // Clonación profunda
   const copia = JSON.parse(JSON.stringify(original));
   // Modificar la copia
   copia.direccion.ciudad = "Barcelona";
   console.log(original.direccion.ciudad);  // Muestra: "Madrid"
   console.log(copia.direccion.ciudad);     // Muestra: "Barcelona"
  
// Marge o fucion ----------------------------------------

const objetoBase = { 
    "nombre": "Producto A", 
    "precio": 100 
  };
   const actualizacion = { 
    "precio": 120, 
    "enStock": true 
  };
   // Merge usando el operador de propagación
const objetoFinal = { ...objetoBase, ...actualizacion };
console.log(objetoFinal);
   // Muestra: { "nombre": "Producto A", "precio": 120, "enStock": true }
  
//Recorrido de objetos ----------------------------------------

const obj = { "a": 1, "b": 2, "c": 3 };
for (let [key, value] of Object.entries(obj)) {
console.log(`${key}: ${value}`);
}

// serializar objeto (Array a Json) jsonString / descontruccion de JSON (de JSON a Array)-----------------------------

const jsonString = '{"nombre":"Juan","edad":30}';
const objetoParsed = JSON.parse(jsonString);
console.log(objetoParsed);
const objetoStringified = JSON.stringify(objetoParsed, null, 2);
console.log(objetoStringified);



