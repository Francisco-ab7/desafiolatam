/* 

RECORDAR COMENTAR !!!

console.log("hola");
let sumanum = 0;
let numero = 0;
for (let i = 1 ; i < 3 ; i++ ){
    numero = parseFloat(prompt("ingrese numero : "));
    //console.log("hola 2", i);
    sumanum += numero;
}
console.log(sumanum);

------------------------------------------------------
ejercicio 1 (sin validar datos)
//SE CREAN VARIABLES Y ASIGNA VALOR
let num1 = 0;
let num2 = 0;
//SE ASIGNA NUEVO VALOR CON CAPTURA DE ENTRADA
num1 = parseFloat(prompt("ingrese numero : "));
num2 = parseFloat(prompt("ingrese numero : "));
//SE MUESTRAN VALOR 
console.log("La suma es : ", num1+num2);
console.log("La resta es : ", num1-num2);
console.log("La multiplicacion es : ", num1*num2);
console.log("La divicion es : ", num1/num2);
console.log("El modulo es : ", num1%num2);

---------------------------------------------------------
ejercicio 2
// SE CREA VARIABLE Y SE ASIGNA VALOR DE ENTRADA
let temp = parseFloat(prompt("ingrese t° en Celsius : "));
//SE MUESTRAN RESULTADOS CON LAS OPERACIONES
console.log("La t° en Kelvin es : ", temp+273.15);
console.log("La t° en Fahrenheit es :", temp*1.8 +32);



---------------------------------------------------------------
ejercicio 3
// SE CREA VARIABLE Y SE ASIGNA VALOR DE ENTRADA
let cantid = parseFloat(prompt("ingrese cantidad de dias : "));
//SE ASIGNA VALOR A VARIABLES SEGUN EL VALOR DE ENTRADA
let canta = parseInt(cantid/365);
let cantm = parseInt(cantid/30);
let cants = parseInt(cantid/7);
//SE MUESTRA EL RESULTADO
console.log("Años: ",canta,"Meses: ",cantm, "Semanas: ",cants);

---------------------------------------------------------------
Ejercicio 4

// SE CREA VARIABLE Y SE ASIGNA VALOR DE ENTRADA
let num1 = parseFloat(prompt("ingrese cantidad de dias : "));
let num2 = parseFloat(prompt("ingrese cantidad de dias : "));
let num3 = parseFloat(prompt("ingrese cantidad de dias : "));
let num4 = parseFloat(prompt("ingrese cantidad de dias : "));
let num5 = parseFloat(prompt("ingrese cantidad de dias : "));
//SE MUESTRAN RESULTADOS CON LAS OPERACIONES
console.log("La Suma es : ",num1+num2+num3+num4+num5);
console.log("Promedi es : ",(num1+num2+num3+num4+num5)/5);

*/