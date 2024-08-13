/**
 * operaciones
 * juan carlos jurado
 * 9 abril 2024
 * version 1.0
 */
const tabla=function tablamulti(){

    let tabla;
  let multi;
  let resul;
  let par= 0;
  let impar= 0;

tabla=0; 
while(tabla < 5) {
     tabla++
    multi=0;

    while(multi < 5 ) { 

          multi++;
          resul= tabla* multi;
        console.log(tabla , "x" , multi , "=" , resul); 

        if (resul % 2 === 0){
          console.log ("Buzz : "+resul);
          par++;
        } else{
          console.log("Bazz : "+resul);
        impar++;
        }

    }

}
console.log("Hay " + impar + " impares");
console.log("Hay " + par + " pares");
return tabla;
}*/
function tablamulti(numero){
  let nume = numero;
let tabla;
let multi;
let resul;
let par= 0;
let impar= 0;

tabla=0; 
while(tabla < nume) {
   tabla++
  multi=0;

  while(multi < nume ) { 

        multi++;
        resul= tabla* multi;
      console.log(tabla , "x" , multi , "=" , resul); 

      if (resul % 2 === 0){
        console.log ("Buzz : "+resul);
        par++;
      } else{
        console.log("Bazz : "+resul);
      impar++;
      }

  }

}
console.log("Hay " + impar + " impares");
console.log("Hay " + par + " pares");
return tabla;
}