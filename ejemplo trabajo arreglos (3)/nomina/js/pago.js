const salario1 = function(pvdias,pndias){
    let vidias = pvdias
    let ndias = pndias
    let resultado = vidias * ndias
    return resultado
}
 const salud1 = function(pvdias,pndias){
    let saludPersna;
    let salarioPersona = salario(pvdias,pndias)
    saludPersna = salarioPersona * 0,12
    return saludPersna
 }
 const arl1 = function(pvdias,pndias){
    let saludPersna;
    let salarioPersona = salario(pvdias,pndias)
    saludPersna = salarioPersona * 0.052
    return saludPersna
 }
 const pension1 = function(pvdias,pndias){
    let saludPersna;
    let salarioPersona = salario(pvdias,pndias)
    saludPersna = salarioPersona * 0,16
    return saludPersna
 }

 const subTras1 = function(pvdias,pndias){
    let salarioPersona = salario(pvdias,pndias) 
    let subsidioT;
    let salarioMinimo = 1300000
    if (salarioPersona<=2 * salarioMinimo)
    subsidioT = 114000

    else subsidioT = 0
    return subsidioT
}
const retencion1 = function(pvdias,pndias){
    let salarioPersona = salario(pvdias,pndias) 
    let retencion;
    let salarioMinimo = 1300000
    if (salarioPersona<=4 * salarioMinimo){
    retencion = 0.04 * salarioPersona;
    }
    

    else {retencion = 0}
    return  retencion
}

const deducible1 = function(pvdias,pndias){
    let descuento; 
    salarioPersona=salario1(vdias,pndias)
    let dsalud = salud(pvdias,pndias)
    let dpension = pension(pvdias,pndias)
    let darl = arl(pvdias,pndias)
    let dretencion = retencion(pvdias,pndias)
    descuento = dsalud + dpension + darl + dretencion 
    return descuento
}

const pagoTotal1 = function(pvdias,pndias){
    let salrioPersona =salario(pvdias,pndias)
    let subtrasporte = subTras(pvdias,pndias)
    let pdeducible = deducible(pvdias,pndias)
    let pago
    pago = salrioPersona + subtrasporte - pdeducible
    return pago
}


/**const extra =function(pvdias,pndias)*/