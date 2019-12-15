$(document).ready(function () {
    $("#selectOrden").change(movilMayorMenor);
  });

document.addEventListener("DOMContentLoaded",function(){

    let formularioMostrarMoviles = document.getElementById("formularioMostrarMoviles");
    formularioMostrarMoviles.addEventListener("submit",mostrarMoviles);

    crearSelectMoviles("selectMoviles");
    crearSelectUsuario("selectUsuario");

    let selectUsuario = document.getElementById("selectUsuario");
    selectUsuario.addEventListener("change",obtenerMovilesComprados);

    let selectMoviles = document.getElementById("selectMoviles");
    selectMoviles.addEventListener("change",obtenerMovilesSimilares);
});


//Reutilizamos mostrarMovilesRefactorizados para mostrar moviles
function mostrarMoviles(event){
    event.preventDefault();
    mostrarMovilesRefactorizados("listadoMoviles",listaMoviles);
    filtrarPrecio();
}

//Reutilizamos mostrarMovilesRefactorizados para mostrar moviles
function mostrarMoviles2(){
    mostrarMovilesRefactorizados("orden",listaMoviles);
   
}

function mostrarMovilesRefactorizados(idDivMostrar,lista){
    let divListaMoviles = document.getElementById(idDivMostrar);
    //Borro el contenido de el div ListadoPersonas
    divListaMoviles.innerHTML = "";
    let ulMoviles = document.createElement("ul");
    for(let movil of lista){
        let liMovil = document.createElement("li");
        liMovil.innerHTML = "<b>Marca:</b> "+ movil.marca +" <b>Modelo:</b> "+ movil.modelo +" <b>Precio: </b>"+ movil.precio +" <b>Camara: </b>"+ movil.camara;
        ulMoviles.appendChild(liMovil);
    }
    divListaMoviles.appendChild(ulMoviles);
}


function filtrarPrecio(){
    let ncamara = parseInt((document.getElementById("camara")).value);
    let nprecio = parseInt((document.getElementById("precio")).value);
    console.log(listaMoviles.filter( x => nprecio === x.precio && ncamara === x.camara));
    let listaFiltrada = listaMoviles.filter( x => nprecio === x.precio && ncamara === x.camara);
    mostrarMovilesRefactorizados("listadoMoviles",listaFiltrada);
}

/*MOVIL SIMILAR */

function crearSelectMoviles(idSelectMovil){
    let select = document.getElementById(idSelectMovil);
    for(movil of listaMoviles){
        let option = document.createElement("option");
        option.value = movil.id;
        option.innerHTML = movil.modelo;
        select.appendChild(option);
    }
}


function obtenerMovilesSimilares(event){
    let selector = document.getElementById("selectMoviles");
    let idMovilSeleccionado = selector.value;
    let ulMovilesSimilares = document.getElementById("moviles_similares");
    ulMovilesSimilares.innerHTML = "";
    let spanNombreMovil = document.getElementById("nombre_movil");
    spanNombreMovil.innerHTML = "";
    if(idMovilSeleccionado !== ""){
        let movilesMostrados = 0;
        let movilSeleccionado = listaMoviles.find( movil => movil.id === parseInt(idMovilSeleccionado));
        spanNombreMovil.innerHTML = ` ${movilSeleccionado.marca} ${movilSeleccionado.modelo} (${"ROM: "+movilSeleccionado.rom+"gb"} - ${"RAM: "+movilSeleccionado.ram+"gb"})`;

        let movilesSimilares = listaMoviles
                                    .filter(movil => movil.rom === movilSeleccionado.rom)
                                    .filter(movil => movil.ram === movilSeleccionado.ram)
                                    .filter(movil => movil.id !== movilSeleccionado.id)

        movilesSimilares.forEach(function(movilSimilar){
            let liMovil = document.createElement("li");
            liMovil.innerHTML = ` ${movilSimilar.marca} ${movilSimilar.modelo} (${"ROM: "+movilSimilar.rom+"gb"} - ${"RAM: "+movilSimilar.ram+"gb"})`;
            ulMovilesSimilares.appendChild(liMovil);
            movilesMostrados++;
        });
        if(movilesMostrados == 0){
            let liMovil = document.createElement("li");
            liMovil.innerHTML = "NO SE HAN ENCONTRADO MOVILES SIMILARES";
            ulMovilesSimilares.appendChild(liMovil);
        }
    }
}

//Funcion en la que obtenemos los moviles que ha comprado el usuario seleccionado
function obtenerMovilesComprados(event){
    let selector = document.getElementById("selectUsuario");
    let idUsuarioSeleccionado = selector.value;
    let ulMovilesComprados = document.getElementById("moviles_comprados");
    ulMovilesComprados.innerHTML = "";
    let spanNombreUsuario = document.getElementById("nombre_usuario");
    spanNombreUsuario.innerHTML = "";
    if(idUsuarioSeleccionado !== ""){
        let persona = listaUsuarios.find( persona => persona.id === parseInt(idUsuarioSeleccionado));
        spanNombreUsuario.innerHTML = persona.nombre;
        for(let movil of persona.movilComprado){
            let liMovil = document.createElement("li");
          liMovil.innerHTML = movil.marca +" "+ movil.modelo;
          ulMovilesComprados.appendChild(liMovil);

        }
    }
}
//Funcion para mostar moviles por mayor o menor precio
function movilMayorMenor(){
    let selector = $("#selectOrden").val();

    //Si seleccionamos vacio aparecerá el mensaje y ningun movil
    if( selector === ""){
        $("#orden").empty();
        let divError = $("<div>DEBES SELECCIONAR UNO!</div>");
        $("#orden").append(divError);

    }
    //Si seleccionamos menor aparecerá la lista de moviles ordenados por menor precio
    if (selector === "menor") {
        $("#orden").empty();
    let ordenaMayor = listaMoviles.sort(function (o1, o2) {
        if (o1.precio > o2.precio) {
                return 1;
        } else if (o1.precio < o2.precio) {
                return -1;
            }
            return 0;
        }); 
        mostrarMoviles2("orden", ordenaMayor);

    }
    //Si seleccionamos mayor aparecerá la lista de moviles ordenados por mayor precio
    if(selector === "mayor"){
        $("#orden").empty();
    let ordenaMenor = listaMoviles.sort(function (o1, o2) {
        if (o1.precio < o2.precio) {
             return 1;
        } else if (o1.precio > o2.precio) {
             return -1;
         }
         return 0;
     }); 
     mostrarMoviles2("orden", ordenaMenor);
     

}


}



