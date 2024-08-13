/**
 * operaciones
 * Juan carlos jurado
 * 3 abril 2024
 * version 1.0
 */

/**function edades(edadDos){
    let edade = 2024;
    let edadeD = edadDos;
    let resultado;
    let mayor; 
    resultado = edade - edadeD;
    mayor = resultado >= 18 ? "es mayor de edad" : "es menor de edad";
    console.log("edad : "+resultado,mayor);
    return resultado;
  
}
*/

const edade= function edades(){
    const edade = 2024;
    let edadeD = 2004;
    let resultado;
    let mayor; 
    resultado = edade - edadeD;
    mayor = resultado >= 18 ? "es mayor de edad" : "es menor de edad";
    console.log("edad : "+resultado,mayor);
    return resultado;
}