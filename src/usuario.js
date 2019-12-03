let divErroresComentarios = document.getElementById("erroresVotoOpin");

function realizarComentario(){
	let inputNombreUsuario = document.getElementById("nombreUsuario");
	let inputMovilP = document.getElementById("movilP");
	let inputVoto = obtenerPuntuacion();
	let inputComentario = document.getElementById("inputComentario");

	vaciarDivErrores(divErroresComentarios);

	let esUsuarioCorrecto = validarNombreUsuario(inputNombreUsuario,divErroresComentarios);
	let esMovilCorrecto = validarMovilSeleccionada(inputMovilP,divErroresComentarios);
	let esVotoCorrecto = validarVoto(inputVoto,divErroresComentarios);
	marcarInputComoCorrecto(inputComentario);

	if(esUsuarioCorrecto && esMovilCorrecto && esVotoCorrecto){
		let usuario = listaClientes.find(cliente => cliente.contieneNombre(inputNombreUsuario.value));
		let pelicula = peliculas.find(pelicula => quitarEspacios(pelicula.titulo) === inputPeliculaC.value);
		if(usuario !== undefined && pelicula !== undefined){
			let nuevoVoto = new Votos(usuario,pelicula,inputVoto,inputComentario.value);
		}
		mostrarPeliculasHTML(peliculas);
		console.log("Comentario realizado con exito");
	}
}

/**
 * Funcion que obtiene si se ha seleccionado alguno de los radio button a la hora de votar
 */
function obtenerPuntuacion(){
	let textoVoto = document.getElementsByName("votacion");
	


	return textoVoto;
}