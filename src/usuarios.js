document.addEventListener("DOMContentLoaded", function () {
    crearSelectUsuario("selectUsuario");
    crearSelectMoviles("selectMovilVotar");

    let selectUsuario = document.getElementById("selectUsuario");
    selectUsuario.addEventListener("change", obtenerMovilesVotados);

    let selectMovilVotar = document.getElementById("selectMovilVotar");
    selectMovilVotar.addEventListener("change", validarMovil);

    let formularioVotar = document.getElementById("formularioVotar");
    formularioVotar.addEventListener("submit", votarMovil);

    botonRecargar.addEventListener("click", obtenerMovilesVotados);

   /** let inputBatMin = document.getElementById("batBaja");
    inputBatMin.addEventListener("keyup", function (event) {
        comprobarCampo(event, comprobarNumero);
    })
    let inputBatAlta = document.getElementById("batAlta");
    inputBatAlta.addEventListener("keyup", function (event) {
        comprobarCampo(event, comprobarNumero);
    }) */
    // botonMuestraBateria.addEventListener("click",mostrarMovilesporBateria);
})
/**function comprobarCampo(event, funcionComprobar) {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
        funcionComprobar(event.target);
    }, 500);
}; */

function crearSelectUsuario(idUsuario) {
    let select = document.getElementById(idUsuario);
    for (usuario of listaUsuarios) {
        let option = document.createElement("option");
        option.value = usuario.id;
        option.innerHTML = usuario.nombre;
        select.appendChild(option);
    }
}

function crearSelectMoviles(idMovil) {
    let select = document.getElementById(idMovil);
    for (movil of listaMoviles) {
        let option = document.createElement("option");
        option.value = movil.id;
        option.innerHTML = movil.modelo;
        select.appendChild(option);
    }
}

function obtenerMovilesVotados(event) {
    let selector = document.getElementById("selectUsuario");
    let idUsuarioSeleccionado = selector.value;
    let ulMovilesVotados = document.getElementById("moviles_votados");
    ulMovilesVotados.innerHTML = "";
    let spanNombreUsuario = document.getElementById("nombre_usuario");
    spanNombreUsuario.innerHTML = "";
    if (idUsuarioSeleccionado !== "") {
        // intentando que salgan los datos de puntuacion y observaciones
        // let movilesVotados=listaTodosLosVotos;
        let movilesVotados = [];
        let persona = listaUsuarios.find(persona => persona.id === parseInt(idUsuarioSeleccionado));
        spanNombreUsuario.innerHTML = persona.nombre;
        persona.votos.forEach(voto => movilesVotados.push(voto.movil));
        for (let movilVotado of movilesVotados) {
            let liMovil = document.createElement("li");
            //  liMovil.innerHTML = movilVotado.marca +" "+ movilVotado.modelo +" "+movilVotado.puntuacion;
            liMovil.innerHTML = movilVotado.marca + " " + movilVotado.modelo;
            ulMovilesVotados.appendChild(liMovil);

        }
    }
}

function validarMovil() {
    let esCorrecto = true;
    let select = document.getElementById("selectMovilVotar");
    let selectUsuarioVotar = document.getElementById("selectUsuario");
    let idMovilVotar = select.value;
    let idUsuarioSeleccionado = selectUsuarioVotar.value;
    let usuarioAVotar = listaUsuarios.find(persona => persona.id === parseInt(idUsuarioSeleccionado));
    let movilAVotar = listaMoviles.find(movil => movil.id === parseInt(idMovilVotar));
    let haVotado = usuarioAVotar.votos.some(voto => voto.movil.id === parseInt(idMovilVotar));
    if (haVotado) {
        alert(`${usuarioAVotar.nombre} ya has votado por el movil ${movilAVotar.modelo}`)
    }
    return esCorrecto;
}

function votarMovil(event) {
    event.preventDefault();
    let formulario = document.getElementById("formularioVotar");
    let esMovilCorrecto = validarMovil();
    if (esMovilCorrecto) {
        let selectUsuario = document.getElementById("selectUsuario");
        let selectMovil = document.getElementById("selectMovilVotar");
        let idUsuarioSeleccionado = selectUsuario.value;
        let idMovilVotar = selectMovil.value;
        let usuarioAVotar = listaUsuarios.find(persona => persona.id === parseInt(idUsuarioSeleccionado));
        let movilAVotar = listaMoviles.find(movil => movil.id === parseInt(idMovilVotar));
        let puntuacion = document.getElementById("puntuacion");
        let observaciones = document.getElementById("observaciones");
        crearVoto(usuarioAVotar, movilAVotar, puntuacion, observaciones);
        formulario.reset();
        obtenerMovilesVotados();
    }
}
function comprobarNumero(inputBatMin) {
    let correcto = false;
    let expresion = /^[0-9]+$/g;

    if (expresion.test(inputBatMin.value)
    ) {
        correcto = true;
        /**let valor = parseInt(inputBatMin.value);
        if(valor >= 6 && valor <=24){
         //   marcarInputCorrecto(inputBatMin);
            correcto = true;
        }else{
           // marcarInputErroneo(inputBatMin);
           alert("Solo pueden introducirse números");
        } */
    } else {
        // marcarInputErroneo(inputBatMin);
        alert("Solo pueden introducirse números");
    }
    return correcto;
}
function comprobarNumero(inputBatAlta) {
    let correcto = false;
    let expresion = /^[0-9]+$/g;

    if (expresion.test(inputBatAlta.value)
    ) {
        correcto = true;
        /**let valor = parseInt(inputBatAlta.value);
        if(valor >= 6 && valor <=24){
           // marcarInputCorrecto(inputBatAlta);
            correcto = true;
        }else{
           // marcarInputErroneo(inputBatMin);
           alert("Solo pueden introducirse números");
        } */
    } else {
        // marcarInputErroneo(inputBatMin);
        alert("Solo pueden introducirse números");
    }
    return correcto;
}

/**function mostrarMovilesporBateria(event){
    let minimoBat = inputBatMin.value;
    let maximoBat= inputBatAlta.value;

    let ulMovilesVotados = document.getElementById("bateria_moviles");
    ulMovilesVotados.innerHTML = "";
  /**  let spanNombreUsuario = document.getElementById("nombre_usuario");
  //  spanNombreUsuario.innerHTML = "";

       // intentando que salgan los datos de puntuacion y observaciones
      // let movilesVotados=listaTodosLosVotos;
      let movilesMostrados = [];
       // let persona = listaUsuarios.find( persona =>
       //persona.id === parseInt(idUsuarioSeleccionado));
       // spanNombreUsuario.innerHTML = persona.nombre;
       let movil=  new Movil;

       movil.bateria.forEach( console.log(movil._bateria));

         /**for(let movilesMostrados of movilesMostrados){
             let liMovil = document.createElement("li");
           //  liMovil.innerHTML = movilVotado.marca +" "+ movilVotado.modelo +" "+movilVotado.puntuacion;
           liMovil.innerHTML = movilVotado.marca +" "+ movilVotado.modelo;
           ulMovilesVotados.appendChild(liMovil);

         }

 } */