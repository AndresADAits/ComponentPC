document.addEventListener("DOMContentLoaded",function(){
    crearSelectUsuario("selectUsuario");
    crearSelectUsuario("selectUsuarioVotar");
    crearSelectMoviles("selectMovilVotar");
    
    let selectUsuario = document.getElementById("selectUsuario");
    selectUsuario.addEventListener("change",obtenerMovilesVotados);
    
    let selectMovilVotar = document.getElementById("selectMovilVotar");
    selectMovilVotar.addEventListener("change",validarMovil);
    
    let formularioVotar = document.getElementById("formularioVotar");
    formularioVotar.addEventListener("submit",votarMovil);

    botonRecargar.addEventListener("click",obtenerMovilesVotados);
})

function crearSelectUsuario(idUsuario){
    let select = document.getElementById(idUsuario); 
    for(usuario of listaUsuarios){
        let option = document.createElement("option");
        option.value = usuario.id;
        option.innerHTML = usuario.nombre;
        select.appendChild(option);
    }
}

function crearSelectMoviles(idMovil){
    let select = document.getElementById(idMovil); 
    for(movil of listaMoviles){
        let option = document.createElement("option");
        option.value = movil.id;
        option.innerHTML = movil.nombre;
        select.appendChild(option);
    }
}

function obtenerMovilesVotados(event){
    let selector = document.getElementById("selectUsuario");
    let idUsuarioSeleccionado = selector.value;
    let ulMovilesVotados = document.getElementById("moviles_votados");
    ulMovilesVotados.innerHTML = "";
    let spanNombreUsuario = document.getElementById("nombre_usuario");
    spanNombreUsuario.innerHTML = "";
    if(idUsuarioSeleccionado !== ""){
        let movilesVotados = [];
        let persona = listaUsuarios.find( persona => persona.id === parseInt(idUsuarioSeleccionado));
        spanNombreUsuario.innerHTML = persona.nombre;
        persona.votos.forEach( voto => movilesVotados.push(voto.movil)); 
        for(let movilVotado of movilesVotados){
            let liMovil = document.createElement("li");
            liMovil.innerHTML = movilVotado.nombre;
            ulMovilesVotados.appendChild(liMovil);
        }
    }
}

function validarMovil(){
    let esCorrecto = true;
    let select = document.getElementById("selectMovilVotar");
    let selectUsuarioVotar = document.getElementById("selectUsuarioVotar");
    let idMovilVotar = select.value;
    let idUsuarioSeleccionado = selectUsuarioVotar.value;
    let usuarioAVotar = listaUsuarios.find( persona => persona.id === parseInt(idUsuarioSeleccionado));
    let movilAVotar = listaMoviles.find( movil => movil.id === parseInt(idMovilVotar));
    let haVotado = usuarioAVotar.votos.some( voto => voto.movil.id === parseInt(idMovilVotar) );
    if(haVotado){
        alert(`EL USUARIO ${usuarioAVotar.nombre} YA HA VOTADO AL MoviL ${movilAVotar.nombre}`)
    }
    return esCorrecto;
}

function votarMovil(event){
    event.preventDefault();
    let formulario = document.getElementById("formularioVotar");
    let esMovilCorrecto = validarMovil();
    if(esMovilCorrecto){
        let selectUsuario = document.getElementById("selectUsuarioVotar");
        let selectMovil = document.getElementById("selectMovilVotar");
        let idUsuarioSeleccionado = selectUsuario.value;
        let idMovilVotar = selectMovil.value;
        let usuarioAVotar = listaUsuarios.find( persona => persona.id === parseInt(idUsuarioSeleccionado));
        let movilAVotar = listaMoviles.find( movil => movil.id === parseInt(idMovilVotar));
        let puntuacion = document.getElementById("puntuacion");
        let observaciones = document.getElementById("observaciones");
        crearVoto(usuarioAVotar,movilAVotar,puntuacion,observaciones);
        formulario.reset();
        obtenerMovilesVotados();
    }
}