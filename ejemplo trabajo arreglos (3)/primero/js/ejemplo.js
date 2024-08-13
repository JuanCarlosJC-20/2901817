/**
 * primer ejercicio con arreglos
 * autor : juan carlos jurado
 * 26/04/24
 */

let arreglo =[];
let arregloFrutas =[];
let interacion;
let consecutivo=0;

arregloFrutas =["banano","platano","yucaa"];

arreglo = [1,2,3,4,5];

let sizeArrelgoNum = arreglo.length;

let sizeArrelgoFruit = arregloFrutas.length;

console.log("numeros total = "+sizeArrelgoNum);

console.log(" total frutas = "+sizeArrelgoFruit);

console.log(arregloFrutas[2]); //invocar una parte especifica

arregloFrutas.push("manzana"); //agregar la lista arrelgo
sizeArrelgoFruit=arregloFrutas.length;

console.log(" total  frutas = "+sizeArrelgoFruit); //enumerar u elistar arreglo
console.log(arregloFrutas[3]);

for(interacion=0; interacion < arregloFrutas.length;interacion++){
    consecutivo =consecutivo + 1;
    console.log(consecutivo+":"+arregloFrutas[interacion]);
}