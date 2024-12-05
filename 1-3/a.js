// // function contarVocales(palabra){
// //     contar = 0
// //     //const vocales = ['a','e','i','o','u']
// //     const vocales = ['aeiou']
// //     const dividida = palabra.split('')
// //     const b = dividida.map((voc)=> {
// //         if(vocales.includes(voc)) {
// //             contar = contar +1;
// //         }
// //         return contar
// //     })
// //    return b
// // }
// // console.log(contarVocales('aa00aa0002211a4a'))

const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
console.log(obj)

const obj2 = {name: "John", age: 30, city: "New York"};
const myJSON = JSON.stringify(obj2);
console.log(myJSON)