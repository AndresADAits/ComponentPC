document.addEventListener("DOMContentLoaded",function(){

    let formularioMostrarMoviles = document.getElementById("formularioMostrarMoviles");
    formularioMostrarMoviles.addEventListener("submit",mostrarMoviles);
})

function mostrarMoviles(event){
    event.preventDefault();
    mostrarMovilesRefactorizados("listadoMoviles",listaMoviles);
    filtrarPrecio();
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