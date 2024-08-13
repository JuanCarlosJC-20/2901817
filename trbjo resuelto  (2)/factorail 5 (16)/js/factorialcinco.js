/**
 * operaciones
 * juan carlos jurado
 * 7 abril 2024
 * version 
 */
const factoria=function factorial(){
    let numero;
    let factor;
    let contador;
    
    numero=5
    contador=0
    factor=1

    while( contador < numero){
        contador=contador+1;
        factor=factor*contador;
        console.log(factor);
    }
    return factor;
    
}

/**function factorial(numero){
    let nume = numero;
    let factor;
    let contador; 
    contador=0
    factor=1
    while( contador < nume){
        contador=contador+1;
        factor=factor*contador;
        console.log(factor);
    }
    return factor;
    
}
*/

       
    