// SE CREA VARIABLE Y SE ASIGNA VALOR DE ENTRADA
console.log("Ingrese 5 numeros: ")
let num1 = parseFloat(prompt("Numero 1: "));
let num2 = parseFloat(prompt("Numero 2: "));
let num3 = parseFloat(prompt("Numero 3: "));
let num4 = parseFloat(prompt("Numero 4: "));
let num5 = parseFloat(prompt("Numero 5: "));

if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5)){
    console.log("No ingreso numeros !!!");
    }
else {
//SE MUESTRAN RESULTADOS CON LAS OPERACIONES
console.log("La Suma es : ",num1+num2+num3+num4+num5);
console.log("Promedio es : ",(num1+num2+num3+num4+num5)/5);
}