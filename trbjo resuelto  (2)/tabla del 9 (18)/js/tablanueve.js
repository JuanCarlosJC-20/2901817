/**
 * operaciones
 * juan carlos jurado
 * 9 abril 2024
 * version 2.0
 */
function multiplic(tabla1){
    let tabla = tabla1;
        let contador;
        let multi;
        let par;
        let impar;

        par=0;
        impar=0;
        contador=0;
        multi=1 
        numero=5; 

        while(contador<numero){
             contador++;
             multi=contador*tabla;

             console.log(tabla , "x" , contador , "=" , multi);

             if((multi%2)==0) {
                  console.log("es par : "+multi);
                par++;
             }

            else{
             console.log("es impar :"+multi);
             impar++ ;
        
            }
     
            console.log("hay "+ par +" numeros pares");
            console.log("hay "+ impar +" numeros impares");
        }
        return multi;
           
}

const multi=function multiplic(){
    let tabla;
        let contador;
        let multi;
        let par;
        let impar;

        par=0;
        impar=0;
        contador=0;
        multi=1 
        numero=5; 
        tabla = 9;

        while(contador<numero){
             contador++;
             multi=contador*tabla;

             console.log(tabla , "x" , contador , "=" , multi);

             if((multi%2)==0) {
                  console.log("es par : "+multi);
                par++;
             }

            else{
             console.log("es impar :"+multi);
             impar++ ;
        
            }
     
            console.log("hay "+ par +" numeros pares");
            console.log("hay "+ impar +" numeros impares");
        }
        return multi;
           
}


