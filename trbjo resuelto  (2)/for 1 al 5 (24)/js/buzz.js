const fortabla= function forbuzz(){
    
     const numero = 5;
     let par = 0;
     let impar = 0;
     let tabla;
     let multi;
     let resultado;

     
     for ( tabla = 1; tabla <= numero; tabla++) {
         for (multi = 1; multi <= numero; multi++) {
             resultado = tabla * multi;

             console.log(tabla+" x", multi+" =",+resultado);

             if (resultado % 2 === 0) {
                 console.log(`${resultado}  Buzz`);
                 par++;
             } else {
                 console.log(`${resultado}  Bazz`);
                 impar++;
             }
         }
     }
     

     return resultado;
     
}
//
function forbuzz(numer){
    
    const numero = numer;
    let par = 0;
    let impar = 0;
    let tabla;
    let multi;
    let resultado
    
    for ( tabla = 1; tabla <= numero; tabla++) {
        for (multi = 1; multi <= numero; multi++) {
            resultado = tabla * multi;

            console.log(tabla+" x", multi+" =",+resultado);

            if (resultado % 2 === 0) {
                console.log(`${resultado}  Buzz`);
                par++;
            } else {
                console.log(`${resultado}  Bazz`);
                impar++;
            }
        }
    }
    
    return resultado;
    
}