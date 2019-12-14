document.addEventListener("DOMContentLoaded", function () {
   
    let inputSelectFiltro = document.getElementById("selectFiltro");
    inputSelectFiltro.addEventListener("change", ordenaPorFiltro);

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



function ordenaPorFiltro(event) {

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