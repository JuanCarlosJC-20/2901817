const tabl=function tabla(){
    let numero ;
    let contador ;
    let multiplicacion;
    numero = 5;
    contador =1;
    multiplicacion=0;
    for(contador =1;contador <= numero ; contador++){
        multiplicacion= numero * contador;

        console.log(numero+" x",contador,"= "+multiplicacion);
    }
    return multiplicacion;
}