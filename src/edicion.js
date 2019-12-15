document.addEventListener("DOMContentLoaded",function(){

    let formularioMostrarMoviles = document.getElementById("mostrarMoviles");
    formularioMostrarMoviles.addEventListener("click",mostrarMoviles);
})

$(function(){
    $("#Id").keyup(validarId);
    $("#Modelo").keyup(validarModelo);
    $("#Marca").keyup(validarMarca);
    $("#Pantalla").keyup(validarPantalla);
    $("#Rom").keyup(validarRom);
    $("#Ram").keyup(validarRam);
    $("#Bateria").keyup(validarBateria);
    $("#Camara").keyup(validarCamara);
    $("#Precio").keyup(validarPrecio);
    $("#formularioMostrarMoviles").submit(function(event){
        event.preventDefault();
        validarFormulario();
    })
   
})

function crearMovil(){
    let idMovil = document.getElementById("Id").value;
    let modeloMovil = document.getElementById("Modelo").value;
    let marcaMovil = document.getElementById("Marca").value;
    let pantallaMovil = document.getElementById("Pantalla").value;
    let romMovil = document.getElementById("Rom").value;
    let ramMovil = document.getElementById("Ram").value;
    let bateriaMovil = document.getElementById("Bateria").value;
    let camaraMovil = document.getElementById("Camara").value;
    let precioMovil = document.getElementById("Precio").value;
    
    let movil1 = new Movil(idMovil,modeloMovil,marcaMovil,pantallaMovil,romMovil,ramMovil,bateriaMovil,camaraMovil,precioMovil);
    listaMoviles.push(movil1);
}

function mostrarMoviles(event){
    event.preventDefault();
    mostrarMovilesRefactorizados("listadoMoviles",listaMoviles);
}


function mostrarMovilesRefactorizados(idDivMostrar,lista){
    let divListaMoviles = document.getElementById(idDivMostrar);
    //Borro el contenido de el div ListadoPersonas
    divListaMoviles.innerHTML = "";
    let ulMoviles = document.createElement("ul");
    for(let movil of lista){
        let liMovil = document.createElement("li");
        liMovil.innerHTML = "<b>ID: </b> "+ movil.id +"<b> MODELO: </b> "+ movil.modelo +"<b> MARCA: </b> "+ movil.marca +"<b> PANTALLA: </b> "+ movil.pantalla +" <b> ROM: </b> "+ movil.rom +" <b> RAM: </b>"+ movil.ram +" <b> BATERIA: </b>"+ movil.bateria +"<b> CAMARA: </b> "+ movil.camara +"<b> PRECIO: </b> "+ movil.precio;
        ulMoviles.appendChild(liMovil);
    }  
    divListaMoviles.appendChild(ulMoviles);
}


function validarId(event){
    let esCorrecto = true;
    let valorId = $("#Id").val().trim();
    $("#Id").removeClass();
    $("#erroresId").empty();


    //Comprobamos que usa solo letras y espacio
    if(!/^[0-9]+$/.test(valorId)){
        esCorrecto = false;
        let spanError = $("<span>SÓLO SE PERMITEN NÚMEROS</span>");
        $("#erroresId").append(spanError);
    }

    if(esCorrecto){
        $("#Id").addClass("valido");
    }else{
        $("#Id").addClass("invalido");
    }

    return esCorrecto;
    
}

function validarModelo(event){
    let esCorrecto = true;
    let valorModelo = $("#Modelo").val().trim();
    $("#Modelo").removeClass();
    $("#erroresModelo").empty();


    //Comprobamos que usa solo letras y espacio
    if(!/^[a-zA-Z ]+$/.test(valorModelo)){
        esCorrecto = false;
        let spanError = $("<span>SÓLO SE PERMITEN LETRAS ( Pueden haber espacios entre las palabras )</span>");
        $("#erroresModelo").append(spanError);
    }

    if(esCorrecto){
        $("#Modelo").addClass("valido");
    }else{
        $("#Modelo").addClass("invalido");
    }

    return esCorrecto;
}

function validarMarca(event){
    let esCorrecto = true;
    let valorMarca = $("#Marca").val().trim().toLowerCase();
    $("#Marca").removeClass();
    $("#erroresMarca").empty();


    //Comprobamos que usa solo letras y espacio
    if(!/^[a-zA-Z ]+$/.test(valorMarca)){
        esCorrecto = false;
        let spanError = $("<span>SÓLO SE PERMITEN LETRAS ( Pueden haber espacios entre las palabras )</span>");
        $("#erroresMarca").append(spanError);
    }

    if(!/^(?=.*apple|.*samsung|.*nokia|.*huawei|.*xiaomi).*$/.test(valorMarca)){
        esCorrecto = false;
        let spanError = $("<span> MARCAS PERMITIDAS: APPLE - SAMSUNG - NOKIA - HUAWEI - XIAOMI )</span>");
        $("#erroresMarca").append(spanError);
    }


    if(esCorrecto){
        $("#Marca").addClass("valido");
    }else{
        $("#Marca").addClass("invalido");
    }

    return esCorrecto;
}

function validarPantalla(event){
    let esCorrecto = true;
    let valorPantalla = $("#Pantalla").val().trim();
    $("#Pantalla").removeClass();
    $("#erroresPantalla").empty();


    //Comprobamos que usa solo letras y espacio
    if(!/^[0-9]+$/.test(valorPantalla)){
        esCorrecto = false;
        let spanError = $("<span>SÓLO SE PERMITEN NÚMEROS</span>");
        $("#erroresPantalla").append(spanError);
    }

    if(esCorrecto){
        $("#Pantalla").addClass("valido");
    }else{
        $("#Pantalla").addClass("invalido");
    }

    return esCorrecto;
}

function validarRom(event){
    let esCorrecto = true;
    let valorRom = $("#Rom").val().trim();
    $("#Rom").removeClass();
    $("#erroresRom").empty();


    //Comprobamos que usa solo letras y espacio
    if(!/^[0-9]+$/.test(valorRom)){
        esCorrecto = false;
        let spanError = $("<span>SÓLO SE PERMITEN NÚMEROS</span>");
        $("#erroresRom").append(spanError);
    }
    
    if(esCorrecto){
        $("#Rom").addClass("valido");
    }else{
        $("#Rom").addClass("invalido");
    }

    return esCorrecto;
}

function validarRam(event){
    let esCorrecto = true;
    let valorRam = $("#Ram").val().trim();
    $("#Ram").removeClass();
    $("#erroresRam").empty();


    //Comprobamos que usa solo letras y espacio
    if(!/^[0-9]+$/.test(valorRam)){
        esCorrecto = false;
        let spanError = $("<span>SÓLO SE PERMITEN NÚMEROS</span>");
        $("#erroresRam").append(spanError);
    }
    
    if(esCorrecto){
        $("#Ram").addClass("valido");
    }else{
        $("#Ram").addClass("invalido");
    }

    return esCorrecto;
}

function validarBateria(event){
    let esCorrecto = true;
    let valorBateria = $("#Bateria").val().trim();
    $("#Bateria").removeClass();
    $("#erroresBateria").empty();


    //Comprobamos que usa solo letras y espacio
    if(!/^[0-9]+$/.test(valorBateria)){
        esCorrecto = false;
        let spanError = $("<span>SÓLO SE PERMITEN NÚMEROS</span>");
        $("#erroresBateria").append(spanError);
    }
    
    if(esCorrecto){
        $("#Bateria").addClass("valido");
    }else{
        $("#Bateria").addClass("invalido");
    }

    return esCorrecto;
}

function validarCamara(event){
    let esCorrecto = true;
    let valorCamara = $("#Camara").val().trim();
    $("#Camara").removeClass();
    $("#erroresCamara").empty();


    //Comprobamos que usa solo letras y espacio
    if(!/^[0-9]+$/.test(valorCamara)){
        esCorrecto = false;
        let spanError = $("<span>SÓLO SE PERMITEN NÚMEROS</span>");
        $("#erroresCamara").append(spanError);
    }
    
    if(esCorrecto){
        $("#Camara").addClass("valido");
    }else{
        $("#Camara").addClass("invalido");
    }

    return esCorrecto;
}

function validarPrecio(event){
    let esCorrecto = true;
    let valorPrecio = $("#Precio").val().trim();
    $("#Precio").removeClass();
    $("#erroresPrecio").empty();


    //Comprobamos que usa solo letras y espacio
    if(!/^[0-9]+$/.test(valorPrecio)){
        esCorrecto = false;
        let spanError = $("<span>SÓLO SE PERMITEN NÚMEROS</span>");
        $("#erroresPrecio").append(spanError);
    }
    
    if(esCorrecto){
        $("#Precio").addClass("valido");
    }else{
        $("#Precio").addClass("invalido");
    }

    return esCorrecto;
}

function validarFormulario(){
    let esCorrectoId = validarId();
    let esCorrectoModelo = validarModelo();
    let esCorrectoMarca = validarMarca();
    let esCorrectoPantalla = validarPantalla();
    let esCorrectoRom = validarRom();
    let esCorrectoRam = validarRam();
    let esCorrectoBateria = validarBateria();
    let esCorrectoCamara = validarCamara();
    let esCorrectoPrecio = validarPrecio();

    if(esCorrectoId && esCorrectoModelo && esCorrectoMarca && esCorrectoPantalla && esCorrectoRom &&
        esCorrectoRam && esCorrectoBateria && esCorrectoCamara && esCorrectoPrecio){
        alert("TODO ESTA CORRECTO");
        let form = $("formularioMostrarMoviles");
        form.submit();
        crearMovil();
    }else{
        alert("HAY ERRORES EN EL FORMULARIO");
    }
}