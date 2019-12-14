function imprimeDiv(idDivMostrar, lista) {
    let divListaMoviles = document.getElementById(idDivMostrar);
    //Borro el contenido de el div ListadoPersonas
    divListaMoviles.innerHTML = "";
    let ulMoviles = document.createElement("ul");
    for (let movil of lista) {
        let liMovil = document.createElement("li");
        liMovil.innerHTML = "<b>ID:</b> " + movil.id + " <b>Modelo:</b> " + movil.modelo + " <b>Marca:</b> " + movil.marca + " <b>Bateria:</b> " + movil.bateria + " <b>Precio: </b>" + movil.precio + " <b>Camara: </b>" + movil.camara;
        ulMoviles.appendChild(liMovil);
    }
    divListaMoviles.appendChild(ulMoviles);
}

function crearSelectMarcas(marcaMovil){
    /**let select = document.getElementById(marcaMovil);
let listaMarcas= [];
for(movil of listaMoviles){
    listaMarcas.push(movil.marca);
}
let listaMarcaSin = new Set(listaMarcas);
for (let i = 0; i < listaMarcaSin.length; i++) {
    let option = document.createElement("option");
    option.value = listaMarcaSin[i];
    option.innerHTML = listaMarcaSin[i];
    select.appendChild(option); 
}
  */
let select = document.getElementById(marcaMovil); 
for(movil of listaMoviles){
    let option = document.createElement("option");
    option.value = movil.marca;
    option.innerHTML = movil.marca;
    select.appendChild(option);
}
}
function crearSelectModelos(modeloMovil){
    let select = document.getElementById(modeloMovil); 
for(movil of listaMoviles){
    let option = document.createElement("option");
    option.value = movil.modelo;
    option.innerHTML = movil.modelo;
    select.appendChild(option);
}
}

function crearSelectUsuario(idUsuario){
    let select = document.getElementById(idUsuario); 
    for(usuario of listaUsuarios){
        let option = document.createElement("option");
        option.value = usuario.id;
        option.innerHTML = usuario.nombre;
        select.appendChild(option);
    }
}