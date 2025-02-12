// function sumaDosOmer(numeros, resultado) {
// for(i=0;i<numeros.length -1;i++){

//     for(j=i; j < numeros.length;j++){

//         if((numeros[i] + numeros[j]) == resultado) {
//             console.log(" es " + i + " y " + j)
//         }}
// }
// }
// sumaDosOmer([3, 8, 11, 17], 20); // Resultado debe ser [0, 3]


//------------------------------------------------------------


// Dado un array de strings en el formato "id, nombre, precio", 
// devuleve un array de objeto del tipo {id, nombre, precio}

//const productos = armarObjeto(["1, manzana, 500", "2, sandia, 3000", "3, membrillo, 300", "4, kiwi, 600"])

// function armarObjeto(productos) {
//     const newObj = productos.map((item)=> {
//         const a = item.split(",")
//         return {
//         id:a[0],
//         nombre:a[1],
//         Precio:a[2]    
//         }   
//     })
//     console.log(newObj)
//     }

// armarObjeto(["1, manzana, 500", "2, sandia, 3000", "3, membrillo, 300", "4, kiwi, 600"]);


//-----------------------------------------------------------------------------------

// Dado un numero "n" de dias, calcula que dia de la semana seria si
// n dias desde un lunes, es decir, 1 dia despues de un lunes, seria un martes,
// 7 dias seria un lunes

// function queDiaEs(numeroDias) {
//     const days = ['lunes','martes','miercoles','jueves','viernes','sabado', 'domingo'];
//     const numero = numeroDias % 7
//     return days[numero - 1]

//   }
//   console.log(queDiaEs(1))

// ----------------------------------------------------------------------------------

// Dado un array de strings en el formato "año de publicacion-nombre del libro"
// y un año, devuelve la cantidad de libros que se hayan publicado antes de ese año

// function filtrarLibros(libros, anio) {
// const newarray = libros.map((item)=> {
//     const dividir = item.split('-')
//     return dividir
// })
// const filtrado = newarray.forEach(element => {
//     if(element[0] < anio){
//         console.log(element)

//         }

// });
// return filtrado

// }
// filtrarLibros(["1990-titanic", "1992-El oso yogi", "1996-El Anillo",  "2002-odisea", "1997-Hello Love", "2000-El perro guau"], 1996)

//-----------------------------------------------------------------------------------

// Dado un array de numeros sin repetidos, devuelve el indice del numero mayor
// no uses Math.max para este ejemplo

// function elMasGrande(numeros) {
// let mayor = numeros[0]
// let indice = 0
// for (let i=1; i < numeros.length; i++){
//     if(mayor < numeros[i]){
//         mayor = numeros[i];
//         indice = i
//         //console.log(mayor, i)
//     }
// }
// console.log(indice)
// }

// elMasGrande([1, 3, 41, 6, 20, 21, 15, 4]) //se espera 2 en este ejemplo



//----------------------------------------------------------------------------------------
//Anagrama

// function anagrama (palabra1, palabra2) {
// if(palabra1.length !== palabra2.length){console.log("No son el mismo largo")}
// else if(palabra1 === palabra2){console.log("Es la misma palabra")}
// else{
//     const new1 = palabra1.split('').sort().join('')
//     const new2 = palabra2.split('').sort().join('')
//     console.log(new1, new2)
//     if(new1 === new2){
//         console.log('Es anagrama')
//     }
//     else console.log ('No es anagrama')
// }
// }
// anagrama("cosa","saco")

//--------------------------------------------------------------------------------------
//N° Primos

// function nprimos() {    
//     let newarray = []
//     for (i=100; i>=2;i--){
//         for(j=i-1;j>=2;j--){
//             if(i % j == 0 && i !== j){
//                 newarray.push(i)
//             }
//         }
//     }
//     let newarray2 = []
//     for (i=2; i<=100;i++){    
//     if(!newarray.includes(i)) {
//         newarray2.push(i)
//     }
//     }
//     console.log(newarray2)

// }

// nprimos()

//----------------------------------------------------------------------------------------

