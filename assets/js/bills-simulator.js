//Función Calcular Gastos
function simular_costo() {
    
//Variable macroeconómica
    let tipo_cambio_dolar = 160   
    //dolar oficial
    
//Variable de operación elegido por cliente
    let precio_transaccion = document.getElementById("precio_transaccion").value; 
    //a continuación, doy ejemplo si fueran 100000usd
    let precio_escritura = precio_transaccion; 
    //100000usd

    //si no se coloca un valor coherente como precio de transacción:
    do{
        Swal.fire({
            title: '¿Existe ese valor de propiedad..?',
            text: 'Ingrese un número correcto',
            icon: 'error',
            showConfirmButton: false,
            timer: 2000
        })
    }while(precio_transaccion > 25000) 
        

    let comision_comprador = document.getElementById("comision_comprador").value / 100
    //0.04 (caso de ejemplo si se eligiera la totalidad de honorarios = 4%)
    
//Comision final con iva o no
    let iva_comprador = document.getElementById("iva_comprador") 
    
    iva_comprador = iva_comprador.checked ? comision_comprador *= 1.21 : comision_comprador

//Impuesto de sellos
    let primervivienda_comprador = document.getElementById("primervivienda_comprador");
    let exencion_sellos = 6250000 / tipo_cambio_dolar;
    // 6250000/160= 39062 usd (la exencion de sellos actualmente es desde los 6.250.000 pesos argentinos)

    let sellos = 0.018;
    //1,8% mitad de totalidad que es 3,6%

    primervivienda_comprador = primervivienda_comprador.checked ? precio_escritura -= parseInt(exencion_sellos) : sellos

//Gastos de escrituración y honorarios de escribanía
    let gastos_escrituracion = 0.012   
    //1,2% es el promedio de gastos


//Generación de nuevas letiables
    let monto_sellos = sellos * precio_escritura
    //obtener el 1,8% de 60938 usd 
    let monto_gastos_escrituracion = gastos_escrituracion * precio_transaccion
    //1.2% * 100000usd 
    let monto_comision_comprador = comision_comprador * precio_transaccion
    //4.84% * 100000usd 
    let total_costo_comprador = monto_sellos + monto_gastos_escrituracion + monto_comision_comprador
    //suma de gastos 
    let plata_final_comprador = parseInt(precio_transaccion) + parseInt(total_costo_comprador)
    //suma total gastos + precio de transaccion


//Redondeo de números y sin decimales
    total_costo_comprador = Math.round(total_costo_comprador * 100) / 100;
    total_costo_comprador = total_costo_comprador.toFixed(0);

    monto_gastos_escrituracion = Math.round(monto_gastos_escrituracion * 100) / 100;
    monto_gastos_escrituracion = monto_gastos_escrituracion.toFixed(0);

    monto_sellos = Math.round(monto_sellos * 100) / 100;
    monto_sellos = monto_sellos.toFixed(0);

    monto_comision_comprador = Math.round(monto_comision_comprador * 100) / 100;
    monto_comision_comprador = monto_comision_comprador.toFixed(0);
    
    plata_final_comprador = Math.round(plata_final_comprador * 100) / 100;
    plata_final_comprador = plata_final_comprador.toFixed(0);



//Resultados
    document.getElementById("analisis_oferta").style.display = "block";
    document.getElementById("analisis_imagen").style.display = "block";
    
    document.getElementById("plata_final_comprador").innerHTML = plata_final_comprador;
    document.getElementById("total_gastos").innerHTML = total_costo_comprador;

    document.getElementById("sellos").innerHTML = monto_sellos;
    document.getElementById("gastos_escrituracion").innerHTML = monto_gastos_escrituracion;
    document.getElementById("monto_comision_comprador").innerHTML = monto_comision_comprador;
    
//Cambiar texto en btn
    document.getElementById("calcular_oferta").innerHTML = "Recalcular";
    
}


//Esconder el analisis de gastos cuando no hayan datos cargados.
document.getElementById("analisis_oferta").style.display = "none";
document.getElementById("analisis_imagen").style.display = "none";

//click para llamar funcion
document.getElementById("calcular_oferta").onclick = function() {
    simular_costo();
};



// Siempre

document.getElementById("comision_comprador").onchange = function() {

    document.getElementById("input_comision_comprador").innerHTML = document.getElementById("comision_comprador").value 
}

    