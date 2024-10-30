// SE CREA VARIABLE Y SE ASIGNA VALOR DE ENTRADA
let temp = parseFloat(prompt("ingrese t° en Celsius : "));

if (isNaN(temp)){
    //SE VALIDA EL TIPO DE DATO
    console.log("No ingreso numeros !!!");
    }
else {
    //SE MUESTRAN RESULTADOS CON LAS OPERACIONES
    console.log("La t° en Kelvin es : ", temp+273.15);
    console.log("La t° en Fahrenheit es :", temp*1.8 +32);
    }