$(document).ready(function () {
    $("#tipoOrden").change(obtieneValue);

});


$(document).ready(function () {
    $("#selectMovilModelo").change(muestraModeloYFiltros);
});

$(document).ready(function () {
    $("#selectUsuVot").change(sumaVotos);
});


document.addEventListener("DOMContentLoaded", function () {

    //CREAMOS UN SELECT CON LOS NOMBRES DE LOS USUARIOS

    crearSelectUsuarioPorNombre("selectUsuario");



    //CREAMOS OTRO SELECT CON LOS MODELOS DE MOVILES

    crearSelectModelos("selectMovilModelo");

    //CREAMOS UN SELECT USUARIO PARA USAR EL RECUENTO DE VOTOS.

    crearSelectUsuarioPorNombre("selectUsuVot");

    let inputSelectFiltro = document.getElementById("selectFiltro");
    inputSelectFiltro.addEventListener("change", ordenaPorFiltro);



    let selectMovilModelo = document.getElementById("selectMovilModelo");
    selectMovilModelo.addEventListener("change", muestraModeloYFiltros);

})

function ordenaPorFiltro() {
    let divImpreso = document.getElementById("Movilesordenados");
    //Borro el contenido del div donde se va imprimiendo las distintas situaciones
    divImpreso.innerHTML = "";
    let inputFiltro = document.getElementById("selectFiltro");
    let valor = inputFiltro.value;
    if (valor === "") {
        /**estado de reposo */
        divImpreso.innerHTML = "";
    }

    if (valor === "id") {
        let ordenaId = listaMoviles.sort(function (o1, o2) {
            if (o1.id > o2.id) { //ORDENACIÓN POR ID
                return 1;
            } else if (o1.id < o2.id) {
                return -1;
            }
            return 0;
        });
        divImpreso.innerHTML = "";
        imprimeDiv("Movilesordenados", ordenaId);
    }
    if (valor === "modelo") {
        let ordenaModelo = listaMoviles.sort(function (o1, o2) {
            if (o1.modelo > o2.modelo) { //ORDENACIÓN POR EL MODELO
                return 1;
            } else if (o1.modelo < o2.modelo) {
                return -1;
            }
            return 0;
        });
        divImpreso.innerHTML = "";
        imprimeDiv("Movilesordenados", ordenaModelo);
    }
    if (valor === "marca") {
        let ordenaMarca = listaMoviles.sort(function (o1, o2) {
            if (o1.marca > o2.marca) {//ORDENACIÓN POR LA MARCA
                return 1;
            } else if (o1.marca < o2.marca) {
                return -1;
            }
            return 0;
        });
        divImpreso.innerHTML = "";
        imprimeDiv("Movilesordenados", ordenaMarca);

    }
    if (valor === "bateria") {
        let ordenaBateria = listaMoviles.sort(function (o1, o2) {
            if (o1.bateria > o2.bateria) {//ORDENACIÓN POR LA BATERIA
                return 1;
            } else if (o1.bateria < o2.bateria) {
                return -1;
            }
            return 0;
        });
        divImpreso.innerHTML = "";
        imprimeDiv("Movilesordenados", ordenaBateria);

    }
    if (valor === "precio") {
        let ordenaPrecio = listaMoviles.sort(function (o1, o2) {
            if (o1.precio > o2.precio) {//ORDENACIÓN POR EL PRECIO
                return 1;
            } else if (o1.precio < o2.precio) {
                return -1;
            }
            return 0;
        });
        divImpreso.innerHTML = "";
        imprimeDiv("Movilesordenados", ordenaPrecio);
    }
}

function obtieneValue() {

    let inputPrecio = $("#precio").val();
    let inputPreParseado = parseInt(inputPrecio);

    let inputMarca = $("#marca").val();
    let inputMarParseado = inputMarca;

    let inputCamara = $("#camara").val();
    let inputCamParseado = parseInt(inputCamara);

    let MovilesQueCumplen = listaMoviles.filter(movil => inputPreParseado === movil.precio && inputMarParseado === movil.marca && inputCamParseado === movil.camara);
    imprimeDiv("listadoMovilesQueCumplen", MovilesQueCumplen);
}


function muestraModeloYFiltros() {
    let usuarioSeleccionado = $("#selectUsuario").val();
    let modeloSelecionado = $("#selectMovilModelo").val();

    let divImpreso = document.getElementById("muestraFavoritoYfiltro");
    //Borro el contenido del div donde se va imprimiendo las distintas situaciones
    divImpreso.innerHTML = "";
    let contador = false;

    for (let voto of listaTodosLosVotos) {

        if (voto.persona.nombre === usuarioSeleccionado) {

            if (voto.movil.modelo === modeloSelecionado) {

                if (voto.puntuacion === true) {

                    contador = true;//Si cumple todos los filtros le doy true para imprimir
                }
            }
        }
    }
    if (contador) {

        //realizo el filtro para imprimir y llamo a una función de "funcionesGenerales.js"
        let MovilesBienValorado = listaMoviles.filter(movil => modeloSelecionado === movil.modelo);


        imprimeDiv("muestraFavoritoYfiltro", MovilesBienValorado);

    } else {
        imprimeDivError("muestraFavoritoYfiltro");
    }
}

function sumaVotos() {
    let cuentaVotoT = 0;
    let cuentaVotoP = 0;
    let usuarioVotoSeleccionado = $("#selectUsuVot").val();

    for (let voto of listaTodosLosVotos) {
        cuentaVotoT++;//Por aqui siempre pasa por lo que pongo el contador global.
        if (voto.persona.nombre === usuarioVotoSeleccionado) {
            cuentaVotoP++;//si cumple el filtro, sumo uno al contador del usuario.
        }

    }

    let mensaje = "La suma de votos totales es " + cuentaVotoT + ". Y el usuario " + usuarioVotoSeleccionado + " voto  " + cuentaVotoP + "  veces";
    alert(mensaje);

}

