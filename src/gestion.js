$(document).ready(function () {
    $("#tipoOrden").change(obtieneValue);

});


$(document).ready(function () {
    $("#selectMovilModelo").change(muestraModeloYFiltros);
});


document.addEventListener("DOMContentLoaded", function () {
    /**
 * CREAMOS UN SELECT CON LOS NOMBRES DE LOS USUARIOS
 */
    crearSelectUsuarioPorNombre("selectUsuario");


    /**
     * CREAMOS OTRO SELECT CON LOS MODELOS DE MOVILES
    */
    crearSelectModelos("selectMovilModelo");

    let inputSelectFiltro = document.getElementById("selectFiltro");
    inputSelectFiltro.addEventListener("change", ordenaPorFiltro);



    let selectMovilModelo = document.getElementById("selectMovilModelo");
    selectMovilModelo.addEventListener("change", muestraModeloYFiltros);

})

function mostrarMovilesOrdenados(idDivMostrar, lista) {
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



function ordenaPorFiltro() {

    // let listaFiltrada = listaMoviles.filter( x => nprecio === x.precio && nmarca === x.marca && ncamara === x.camara);

    // return mostrarMovilesOrdenados("Movilesordenados",listaMovilesOrdenados);
    let inputFiltro = document.getElementById("selectFiltro");
    let valor = inputFiltro.value;
    if (valor === "") {
        /**estado de reposo */
    }

    if (valor === "id") {
        mostrarMovilesOrdenados("Movilesordenados", listaMoviles.sort());
    }
    if (valor === "modelo") {
        let ordenaModelo = listaMoviles.sort(function (o1, o2) {
            if (o1.modelo > o2.modelo) { //comparación lexicogŕafica
                return 1;
            } else if (o1.modelo < o2.modelo) {
                return -1;
            }
            return 0;
        });

        mostrarMovilesOrdenados("Movilesordenados", ordenaModelo);
    }
    if (valor === "marca") {
        let ordenaMarca = listaMoviles.sort(function (o1, o2) {
            if (o1.marca > o2.marca) {
                return 1;
            } else if (o1.marca < o2.marca) {
                return -1;
            }
            return 0;
        });
        mostrarMovilesOrdenados("Movilesordenados", ordenaMarca);

    }
    if (valor === "bateria") {
        let ordenaBateria = listaMoviles.sort(function (o1, o2) {
            if (o1.bateria > o2.bateria) {
                return 1;
            } else if (o1.bateria < o2.bateria) {
                return -1;
            }
            return 0;
        });
        mostrarMovilesOrdenados("Movilesordenados", ordenaBateria);

    }
    if (valor === "precio") {
        let ordenaPrecio = listaMoviles.sort(function (o1, o2) {
            if (o1.precio > o2.precio) {
                return 1;
            } else if (o1.precio < o2.precio) {
                return -1;
            }
            return 0;
        });
        mostrarMovilesOrdenados("Movilesordenados", ordenaPrecio);
    }
}

function obtieneValue() {
    // let eleccion = $("#selectOrden").val();

    let inputPrecio = $("#precio").val();
    let inputPreParseado = parseInt(inputPrecio);

    let inputMarca = $("#marca").val();
    let inputMarParseado = inputMarca;

    let inputCamara = $("#camara").val();
    let inputCamParseado = parseInt(inputCamara);

    let MovilesQueCumplen = listaMoviles.filter(movil => inputPreParseado === movil.precio && inputMarParseado === movil.marca && inputCamParseado === movil.camara);
    mostrarMovilesOrdenados("listadoMovilesQueCumplen", MovilesQueCumplen);
}




function muestraModeloYFiltros() {
    let usuarioSeleccionado = $("#selectUsuario").val();
    let modeloSelecionado = $("#selectMovilModelo").val();
  
        let borrador = document.getElementById("muestraFavoritoYfiltro");
        borrador.innerHTML = "";



    for (let voto of listaTodosLosVotos) {

        if (voto.persona.nombre === usuarioSeleccionado) {

            if (voto.movil.modelo === modeloSelecionado) {

                if (voto.puntuacion === true) {
                    /**
                     * VACIO LO QUE PUDIESE ESTAR IMPRESO ANTES EN EL DIV QUE LUEGO VOY A IMPRIMIR.
                     * 
                     */


                    /**
                    * CREO EL FILTRO PARA QUE MUESTRE MOVILES DEL MODELO SELECCIONADO
                    */

                    let MovilesBienValorado = listaMoviles.filter(movil => modeloSelecionado === movil.modelo);

                    /**
                     * LLAMO A LA FUNCION DE FUNCIONES GENERALES QUE IMPRIME CON EL NOMBRE DEL DIV Y UN FILTRO COMO PARAMETROS./**
                                         * CREO EL FILTRO PARA QUE MUESTRE MOVILES DEL MODELO SELECCIONADO
                                         */

                    imprimeDiv("muestraFavoritoYfiltro", MovilesBienValorado);
                } else {
                    let borrando = document.createElement("li");
                    borrando.innerHTML = "ESE USUARIO NO HA VALORADO BIEN A ESE MODELO o NO VOTO POR EL";
                    borrador.appendChild(borrando);
                }
            } else {
                let borrando = document.createElement("li");
                borrando.innerHTML = "ESE USUARIO NO HA VALORADO BIEN A ESE MODELO o NO VOTO POR EL";
                borrador.appendChild(borrando);
            }
        } else {
            let borrando = document.createElement("li");
            borrando.innerHTML = "ESE USUARIO NO HA VALORADO BIEN A ESE MODELO o NO VOTO POR EL";
            borrador.appendChild(borrando);
        }
    }
}