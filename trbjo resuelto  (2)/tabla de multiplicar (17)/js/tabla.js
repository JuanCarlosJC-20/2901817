/**
 * operaciones
 * juan carlos jurado
 * version 2.0
 * 9 abril 2024
 */

const multipli=function multiplicar(){
    let contador;
    let  numero = 5;
    let multiplicar;
    contador = 0;
    
    while(contador < numero){
        contador=contador+1;
        multiplicar=numero * contador;
        console.log(numero,"x",contador,"=",multiplicar);
    }
    return multiplicar;
}

function multiplicar(numer){
    let contador;
    let  numero = numer;
    let multiplicar;
    contador = 0;
    
    while(contador < numero){
        contador=contador+1;
        multiplicar=numero * contador;
        console.log(numero,"x",contador,"=",multiplicar);
    }
    return multiplicar;
}

