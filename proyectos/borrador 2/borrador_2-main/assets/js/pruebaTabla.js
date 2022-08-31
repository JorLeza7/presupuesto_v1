let v_monto = 1200;
let v_moneda = "Bs.";
let v_interes = 12;
let v_plazo = 12;
let v_formaPago = "M";
let v_periodoGracia = 0;
let v_seguroDesgravamen = 0;
let v_tipoCuota = "F";


let deuda = v_monto;
let nroCuota = 1;
let porcentajeInteres = 0;
let m = [0,1,-2,1,0,1,0,1,1,0,1,0,1];

let
if (v_formaPago == "M") porcentajeInteres = v_interes / v_plazo;
let interesCuota = deuda*(porcentajeInteres/100);
let pago = deuda/v_plazo;

let pagoProgramado = pago+interesCuota;

let interesAcumulado=0;

while (deuda >= 0) {
    deuda = deuda - pago ;
    interesAcumulado += interesCuota;
    
    console.log(nroCuota+"     "+interesCuota+"     "+interesAcumulado+"     "+pagoProgramado+"     "+deuda);
    interesCuota = deuda*(porcentajeInteres/100);
    
    pagoProgramado = pago+interesCuota;
    
    nroCuota++;
}



var fecha
