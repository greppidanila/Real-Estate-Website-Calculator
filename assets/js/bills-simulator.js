//Calcular Gastos
function simular_costo() {
    
    // variables macroeconómicas
        var tipo_cambio_dolar = 160
        
    // variables de la operación
        var precio_transaccion = document.getElementById("precio_transaccion").value;
        var precio_escritura = precio_transaccion;
    
        var comision_comprador = document.getElementById("comision_comprador").value / 100;
        
    // comisiones finales
        var iva_comprador = document.getElementById("iva_comprador");
        
        if (iva_comprador.checked == true) {
          comision_comprador = comision_comprador * 1.21
        } else {
            comision_comprador = comision_comprador
        } 
    
    // impuesto de sellos
        var primervivienda_comprador = document.getElementById("primervivienda_comprador");
        var exencion_sellos = 6250000 / tipo_cambio_dolar
    
        if (primervivienda_comprador.checked == true) {
            precio_escritura = precio_escritura - exencion_sellos
        } else {
            sellos = 0.018 //1,8% mitad de totalidad que es 3,6%
        } 
    
    
    // variable trámites
        gastos_escrituracion = 0.012   //1,2% promedio de gastos
    
    
    // Generación de nuevas variables
        monto_sellos = sellos * precio_escritura
        monto_gastos_escrituracion = gastos_escrituracion * precio_transaccion
        monto_comision_comprador = comision_comprador * precio_transaccion
        total_costo_comprador = monto_sellos + monto_gastos_escrituracion + monto_comision_comprador
        plata_final_comprador = -(-precio_transaccion - total_costo_comprador)
    
    
    // Redondeo de números
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
    
    
    //Esconder el analisis de gastos e imagen cuando no hayan datos cargados.
    document.getElementById("analisis_oferta").style.display = "none";
    document.getElementById("analisis_imagen").style.display = "none";
    

    //click para llamar funcion calcular
    document.getElementById("calcular_oferta").onclick = function() {
        simular_costo();
    };
    
    
    
    // Activo siempre, input del 1 al 4%
    
    document.getElementById("comision_comprador").onchange = function() {
    
        document.getElementById("input_comision_comprador").innerHTML = document.getElementById("comision_comprador").value 
    }
    
    
    
    //DARK LIGHT MODE
    let principal = document.getElementById("principal");
    let boton = document.getElementById("mode");
    let modo = localStorage.getItem("modo");
    
    //primer renderizado
    if(modo != null){
        if(modo == "dark"){
            document.body.className = modo;
            principal.className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center "+modo;
            boton.innerText="Light Mode";
        }
    }else{
        modo = "light";
    }
    
    //evento del boton
    boton.onclick = () => {
        if(modo == "light"){
            document.body.className="dark";
            principal.classList.remove("light");
            principal.classList.add("dark");
            boton.innerText="Light Mode";
            modo = "dark";
        }else{
            document.body.className="light";
            principal.classList.remove("dark");
            principal.classList.add("light");
            boton.innerText="Dark Mode";
            modo = "light";
        }
        localStorage.setItem("modo",modo);
    }
    
    
    