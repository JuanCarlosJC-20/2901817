let nomina =[];
totalPagar=[];
let valorDiaP;
let diasTrabajadosP;
let interacion;
let salarioPersona;
let saludP;
let arl;
let pensionP;
let subTras;
let retencion;
let deducibleP;
let pagoTotal;
let total;
let salarioP;
let extra;

 nomina =[
    {id: 1,numeroDocumento:1077224670, nombre : "Juan Carlos", apellido: "Jurado Castañeda", edad: 19, valorDia:120000,diasTrabajado:30},
    {id: 2,numeroDocumento:1077224670, nombre : "Juan Carlos", apellido: "Jurado Castañeda", edad: 19, valorDia:120000,diasTrabajado:30},
    {id: 3,numeroDocumento:1077224670, nombre : "Juan Carlos", apellido: "Jurado Castañeda", edad: 19, valorDia:120000,diasTrabajado:30},
    {id: 4,numeroDocumento:1077224670, nombre : "Juan Carlos", apellido: "Jurado Castañeda", edad: 19, valorDia:120000,diasTrabajado:30},
    {id: 5,numeroDocumento:1077224670, nombre : "Juan Carlos", apellido: "Jurado Castañeda", edad: 19, valorDia:120000,diasTrabajado:30},
    {id: 6,numeroDocumento:1077224670, nombre : "Juan Carlos", apellido: "Jurado Castañeda", edad: 19, valorDia:120000,diasTrabajado:30},
    {id: 7,numeroDocumento:1077224670, nombre : "Juan Carlos", apellido: "Jurado Castañeda", edad: 19, valorDia:120000,diasTrabajado:30},
 ];
 console.table(nomina);

 for(interacion=0;interacion < 7;interacion++){
    valorDiaP =nomina[interacion].valorDia;
    diasTrabajadosP=nomina[interacion].diasTrabajado;

    salioPersona=salario1(pvdias,pndias);
    saludP = salud1(pvdias,pndias);
    arl = arl1(pvdias,pndias);
    pensionP=pension1(pvdias,pndias)
    subTras=subTras1(pvdias,pndias);
    retencion=retencion1(pvdias,pndias);
    deducibleP=deducible1(pvdias,pndias);
     pagoTotal = pagoTotal1(pvdias,pndias);

     totalPagar.push({id:nomina[interacion],id,numeroDocumento:nomina[interacion].numeroDocumento,
      nombre:nomina[interacion].nombre,
        apellido:nomina[interacion].apellido,edad:nomina[interacion].edad,valorDia:valorDia,
        diasTrabajado:diasTrabajado,salarioP:salarioPersona, } )
     }
     
 console.table(totalPagar);
 


 