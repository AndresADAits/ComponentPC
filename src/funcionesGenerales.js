/**
 * AQUI ESTAN TODAS LAS FUNCIONES QUE HEMOS PODIDO REUTILIZAR, PARA QUE SEAN LLAMADAS DESDE DISTISTAS
 * PARTES Y PODER HACER UN CÓDIGO MÁS LIMPIO.
 */


/** FUNCION PARA IMPRIMIR UN DIV CON UNA LISTA FILTRADA.
 * 
 * @param {Nombre del div donde se va a imprimir una lista} idDivMostrar 
 * @param {Filtro realizado a una lista para que muestre los elementos de la lista ya filtrada} lista 
 */
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

/** FUNCION PARA IMPRIMIR UN DIV CON MENSAJE DE ERROR.
 * 
 * @param {Nombre del div donde se va a imprimir el mesnaje de error} idDivMostrar 
 * 
 */
function imprimeDivError(idDivMostrar) {
    let divListaMoviles = document.getElementById(idDivMostrar);
    //Borro el contenido de el div ListadoPersonas
    divListaMoviles.innerHTML = "";
    let ulMoviles = document.createElement("ul");
   
        let liMovil = document.createElement("li");
        liMovil.innerHTML = " NO EXISTE UN ARTICULO CON ESAS CARACTERISTICAS";
        ulMoviles.appendChild(liMovil);
    
    divListaMoviles.appendChild(ulMoviles);
}


/**FUNCION PARA CREAR UN SELECT EN HTML CON UNA LISTA DE MARCAS DE MOVILES.
 * 
 * @param {Nombre del select, del cual vamos a completar sus options} marcaMovil 
 */
function crearSelectMarcas(marcaMovil) {
    /** DE ESTA FORMA SE PRODIA CONSEGUIR QUE NO SE REPITIERAN MARCAS.
     * 
     * let select = document.getElementById(marcaMovil);
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
    for (movil of listaMoviles) {
        let option = document.createElement("option");
        option.value = movil.marca;
        option.innerHTML = movil.marca;
        select.appendChild(option);
    }
}


/**FUNCION PARA CREAR UN SELECT CON  MODELOS DE MOVILES.
 * 
 * @param {Nombre del select en el que vamos a introducir options con los modelos de movil} modeloMovil 
 */
function crearSelectModelos(modeloMovil) {
    let select = document.getElementById(modeloMovil);
    for (movil of listaMoviles) {
        let option = document.createElement("option");
        option.value = movil.modelo;
        option.innerHTML = movil.modelo;
        select.appendChild(option);
    }
}



/**FUNCION PARA CREAR UN SELECT CON LOS USUARIOS QUE EXISTEN.
 * OPTION.VALUE SERA EL ID DEL USUARIO
 * @param {Nombre del select en el que vamos a introducir options con los nombres de usuarios} idUsuario 
 */
function crearSelectUsuario(idUsuario) {
    let select = document.getElementById(idUsuario);
    for (usuario of listaUsuarios) {
        let option = document.createElement("option");
        option.value = usuario.id;
        option.innerHTML = usuario.nombre;
        select.appendChild(option);
    }
}



/**FUNCION PARA CREAR UN SELECT CON LOS USUARIOS QUE EXISTEN(MODIFICADA).
 * OPTION.VALUE SERA EL NOMBRE DEL USUARIO.
 * @param {Nombre del select en el que vamos a introducir options con los nombres de usuarios} idUsuario 
 */ 
function crearSelectUsuarioPorNombre(idUsuario) {
    let select = document.getElementById(idUsuario);
    for (usuario of listaUsuarios) {
        let option = document.createElement("option");
        option.value = usuario.nombre;// CAMBIO CON LA FUNCION ANTERIOR, YA QUE NECESITO EL NOMBRE Y NO EL ID.
        option.innerHTML = usuario.nombre;
        select.appendChild(option);
    }
}

/**FUNCION PARA IMPRIMIR TEXTO
 * 
 * @param {Nombre del div en que vamos a imprimir} nombreDiv 
 * @param {Texto que vamos a imprimir} mensaje 
 */
function imprimeMensaje(nombreDiv,mensaje) {

    let dondeImprimo= document.getElementById(nombreDiv);
    let texto= "";
    texto.innerHTML= mensaje;

    dondeImprimo.appendChild(texto);
}