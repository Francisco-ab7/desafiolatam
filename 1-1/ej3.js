// SE CREA VARIABLE Y SE ASIGNA VALOR DE ENTRADA
let cantid = parseFloat(prompt("ingrese cantidad de dias : "));
//SE VALIDA EL TIPO DE DATO
if (isNaN(cantid)){
    console.log("No ingreso numeros !!!");
    }
else {
    //SE ASIGNA VALOR A VARIABLES SEGUN EL VALOR DE ENTRADA
    let canta = parseInt(cantid/365);
    let cantm = parseInt(cantid/30);
    let cants = parseInt(cantid/7);
    //SE MUESTRA EL RESULTADO
    console.log("Años:",canta,"Meses:",cantm, "Semanas:",cants);
}
