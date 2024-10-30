//SE CREAN VARIABLES y ASIGNA VALOR CON CAPTURA DE ENTRADA

let num1 = parseFloat(prompt("ingrese numero : "));
let num2 = parseFloat(prompt("ingrese numero : "));

if (isNaN(num1) || isNaN(num2) ){
    //SE VALIDA EL TIPO DE DATO
    console.log("No ingreso dos numeros !!!");
}
    //SE VALIDA QUE NO SEAN IGUALES
else if (num1 === num2) {
    console.log("Ingreso dos numeros iguales !");
}
    //SE VALIDA QUE SEAN MAYOR 0
else if (num1<0 || num2<0) {
    console.log("Deben ser mayor a 0 !");
}
else {
    //SE MUESTRAN VALOR
    console.log("La suma es : ", num1+num2);
    console.log("La resta es : ", num1-num2);
    console.log("La multiplicacion es : ", num1*num2);
    console.log("La divicion es : ", num1/num2);
    console.log("El modulo es : ", num1%num2);
}