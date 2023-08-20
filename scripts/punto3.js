// 3- Ingresar por pantalla un número entre 1 y 12, luego imprimir en letras el mes al
// que corresponde el valor ingresado y los signos del zodiaco. Ejemplo: si el valor
// ingresado es 5, entonces imprimir “Mayo”, “Tauro - Géminis”.

let valueIngr = prompt("Ingrese un numero del 1 al 12")

switch (Number(valueIngr)) {
    case 1: 
        alert("Enero”, “Capricornio - Acuario")
        
        break;
    case 2: 
        alert("Febrero”, “Acuario - Piscis");
        
        break;
    case 3: alert("Marzo”, “Piscis - Aries");
        
        break;
    case 4: alert("Abril”, “Aries - Tauro");
        
        break;
    case 5: alert("Mayo”, “Tauro - Géminis");
        
        break;
    case 6: alert("Junio”, “Geminis - Cáncer");
        
        break;
    case 7: alert("Julio”, “Cáncer - Leo");
        
        break;
    case 8: alert("Agosto”, “Leo - Virgo");
        
        break;
    case 9: alert("Septiembre”, “Virgo - Libra");
        
        break;
    case 10: alert("Octubre”, “Libra - Escorpion");
        
        break;
    case 11: alert("Noviembre”, “Escorpion - Sagitario");
        
        break;

    default : 
        alert("Diciembre”, “Sagitario - Capricornio");

    
}