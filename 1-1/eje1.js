//SE CREAN VARIABLES Y ASIGNA VALOR
//let num1 = 0;
//let num2 = 0;
//SE ASIGNA NUEVO VALOR CON CAPTURA DE ENTRADA
let num1 = parseInt(prompt("ingrese numero : "));
let num2 = parseInt(prompt("ingrese numero : "));

if (typeof num1 === 'number' ) {
    console.log(isNaN(num1));
    console.log(typeof num1 === "number");

    console.log("La suma es : ", num1+num2);
    console.log("La resta es : ", num1-num2);
    console.log("La multiplicacion es : ", num1*num2);
    console.log("La divicion es : ", num1/num2);
    console.log("El modulo es : ", num1%num2);

}
else { 
    console.log("Error, no ingreso dos numeros: ");
    }
