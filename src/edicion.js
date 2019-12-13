document.addEventListener("DOMContentLoaded",function(){

    let formularioMostrarMoviles = document.getElementById("formularioMostrarMoviles");
    formularioMostrarMoviles.addEventListener("submit",mostrarMoviles);

    let divCrearMovil  = document.getElementById('crearMovil');
	divCrearMovil.addEventListener("click", crearMovil);
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
        liMovil.innerHTML = "<b>Marca:</b> "+ movil.marca +" <b>Modelo:</b> "+ movil.modelo +" <b>Precio: </b>"+ movil.precio +" <b>Camara: </b>"+ movil.camara;
        ulMoviles.appendChild(liMovil);
    }  
    divListaMoviles.appendChild(ulMoviles);
}