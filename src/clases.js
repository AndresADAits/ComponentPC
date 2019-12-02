/**
 * DUDAS:
 * 
 * LA CLASE MOVIL ESTA RELACIONADA CON LA CLASE VOTO POR VOTO
 * 
 * LA CLASE VOTO ESTA RELACIONADA CON LA CLASE MOVIL POR MOVIL Y USUARIO CON USUARIO
 * 
 * LA CLASE USUARIO ESTA RELACIONADA CON LA CLASE VOTO POR VOTO
 */
/**
 * CLASE MOVIL TIENE modelo, precio, marca, pantalla, rom, ram, bateria, camara, votos
 * 
 * VOTOS, SERA LA RELACION CON LA CLASE VOTOS
 */
class movil {
	constructor(modelo, precio, marca, pantalla, rom, ram, bateria, camara) {
		this._modelo = modelo;
		this._precio = precio;
		this._marca = marca;
		this._pantalla = pantalla;
		this._rom = rom;
		this._ram = ram;
		this._bateria = bateria;
		this._camara = camara;
		this._listaVotos=[];
	}
	get modelo() {
		return this._modelo;
	}
	set modelo(modelo) {
		this._modelo = modelo;
	}
	get precio() {
		return this._precio;
	}

	set precio(precio) {
		this._precio = precio;
	}

	get marca() {
		return this._marca;
	}
	set(marca) {
		this._marca = marca;
	}
	get pantalla() {
		return this._pantalla;
	}
	set(pantalla) {
		this._pantalla = pantalla;
	}

	get rom() {
		return this._rom;
	}
	set(rom) {
		this._rom = rom;
	}
	get ram() {
		return this._ram;
	}
	set(ram) {
		this._ram = ram;
	}


	get bateria() {
		return this._bateria;
	}
	set(bateria) {
		this._bateria = bateria;
	}

	get camara() {
		return this._camara;
	}
	set(camara) {
		this._camara = camara;
	}

	addVoto(voto){
        this._listaVotos.push(voto);
    }

    mostrarVotos(){
        for(let voto of this.listaVotos){
            console.log(voto);
        }
    }
	
}






/**
 * CLASE VOTOS TIENE puntuacion, usuario, movil
 * 
 * USUARIO SERA LA RELACION CON CLASE USUARIO
 * 
 * MOVIL SERLA LA RELACION CON CLASE MOVIL
 */

class votos {
	constructor(puntuacion, usuario, movil) {

	}
	get puntuacion() {
		return this._puntuacion;
	}
	set puntuacion(puntuacion) {
		this._puntuacion = puntuacion;
	}
	get usuario() {
		return this._puntuacion;
	}
	set usuario(usuario) {
		this._usuario = usuario;
	}
	get movil() {
		return this._movil;
	}
	set movil(movil) {
		this._movil = movil;
	}

}
/**
 * USUARIO TIENE edad,nombre,apellido,dni,correo,voto
 * VOTO ES LA RELACION CON VOTO
 */
class usuario {
	/**constructor(edad, nombre, apellido, dni, correo, votos) */
	constructor(edad, nombre, apellido, dni, correo) {
		this._edad=edad;
		this._nombre=nombre;
		this._apellido=apellido;
		this._dni=dni;
		this._correo=correo;
		this._listaVotos=[];
	}
	get edad() {
		return this._edad;
	}
	set edad(edad) {
		this._edad = edad;
	}
	get nombre() {
		return this._nombre;
	}
	set nombre(nombre) {
		this._nombre = nombre;
	}
	get apellido() {
		return this._apellido;
	}
	set apellido(apellido) {
		this._apellido = apellido;
	} get dni() {
		return this._dni;
	}
	set dni(dni) {
		this._dni = dni;
	} get correo() {
		return this._correo;
	}
	set correo(correo) {
		this._correo = correo;
	}
	
	addVoto(voto){
        this._listaVotos.push(voto);
    }

    mostrarVotos(){
        for(let voto of this.listaVotos){
            console.log(voto);
        }
    }
	

}






/**
 *	OBJETOS 
 */


/**let usuario1 = new usuario(25, "Jorge", "Baron", "28826598p", "jorge.baron@adaits.es", votos1); */
let usuario1 = new usuario(25, "Jorge", "Baron", "28826598p", "jorge.baron@adaits.es");

let movil1 = new movil("3330", 300, "nokia", 3, 64, 4, 3000, 48);
let votos1 = new votos(9, usuario1, movil1);
movil1.addVoto(votos1);
usuario1.addVoto(usuario1);

usuario1.add

alert(votos1);


/**
 * modelo, precio, marca, pantalla, rom, ram, bateria, camara, votos
let libro2 = new Libro("Doctor Sueño", autor1, "Santillana", "1234567890123");
autor1.addLibro(libro2);
console.log(autor1);


 */












/**
 * CLASE PLACABASE, QUE TENDRA: MODELO, PRECIO, MARCA, SOCKET, CONEXIONES,
 * Y LISTADEVOTOS. ESTA ULTIMA SERVIRA PARA ENLAZAR CON LA CLASE VOTO
 */
/*

class placaBase {
	constructor(modelo, precio, marca, socket, conexiones, listaVotos) {
		this._modelo = modelo;
		this._precio = precio;
		this._marca = marca;
		this._socket = socket;
		this._conexiones = conexiones;
		this._listaVotos = listaVotos;
	}
	get modelo() {
		return this._modelo;
	}
	set modelo(modelo) {
		this._modelo = modelo;
	}
	get precio() {
		return this._precio;
	}

	set precio(precio) {
		this._precio = precio;
	}

	get marca() {
		return this._marca;
	}
	set(marca) {
		this._marca = marca;
	}
	get socket() {
		return this._socket;
	}
	set(socket) {
		this._socket = socket;
	}
	get conexiones() {
		return this._conexiones;
	}
	set conexiones(conexiones) {
		this._conexiones = conexiones;
	}
}
*/
/**CREAMOS TODAS ESTAS CLASES PERO PENSAMOS QUE IBA A SER DEMASIADO COMPLEJO PODER USARLAS TODAS
 * class discoDuro {
	constructor(marca, almacenamiento, conexion, pulgadas) {
		this._marca
		this._almacenamiento
		this._conexion
		this._pulgadas
	}

	get marca() {
		return this._marca;
	}
	set marca(marca) {
		this._marca = marca;
	}
	get almacenamiento() {
		return this._almacenamiento;
	}
	set almacenamiento(almacenamiento) {
		this._almacenamiento = alamacenamiento;
	}
	get(conexion) {
		return this._conexion;
	}
	set conexion(conexion) {
		this._conexion = conexion;
	}
	get(pulgadas) {
		return this._pulgadas;
	}
	set pulgadas(pulgadas) {
		this._pulgadas = pulgadas;
	}
}











class procesadores {
	constructor(procesador, socket, marca) {
		this._procesador = procesador;
		this._socket = socket;
		this._marca = marca;
	}
	get procesador() {
		return this._procesador;
	}
	set procesador(procesador) {
		this._procesador = procesador;
	}

	get socket() {
		return this._socket;
	}
	set socket(socket) {
		this._socket = socket;
	}

	get marca() {
		return this._marca;
	}
	set marca(marca) {
		this._marca;
	}
}


class tarjetaGrafica {
	constructor(marca, memoria, tipo) {
		this._marca = marca;
		this._memoria = memoria;
		this._tipo = tipo;
	}

	get marca() {
		return this._marca;
	}
	set marca(marca) {
		this._marca;
	}
	get memoria() {
		return this._memoria;
	}
	set memoria(memoria) {
		this._memoria;
	}
	get tipo() {
		return this._tipo;
	}
	set tipo(tipo) {
		this._tipo;
	}
}


class memoriaRam {
	constructor(marca, frecuencia, almacenamiento) {
		this._marca = marca;
		this._almacenamiento = almacenamiento;
		this._frecuencia = frecuencia;

	}

	get marca() {
		return this._marca;
	}

	set marca(marca) {
		this._marca = marca;
	}

	get almacenamiento() {
		return this._almacenamiento;
	}

	set almacenamiento(almacenamiento) {
		this._almacenamiento = almacenamiento;
	}

	get frecuencia() {
		return this._frecuencia;
	}
	set frecuencia(frecuencia) {
		this._frecuencia = frecuencia;
	}

}

class torres {
	constructor(marca, color, factor) {
		this._marca = marca;
		this._color = color;
		this._factor = factor;
	}
	get marca() {
		return this._marca;
	}
	set marca(marca) {
		this._marca = marca;
	}

	get color() {
		return this._color;
	}
	set color(color) {
		this._color = color;
	}

	get factor() {
		return this._factor;
	}
	set factor(factor) {
		this._factor = factor;
	}

}


class fuenteA {
	constructor(marca, color, factor) {
		this._marca = marca;
		this._tipo = tipo;
		this._conectores;
	}
	get marca() {
		return this._marca;
	}
	set tipo(tipo) {
		this._tipo = tipo;
	}

	get marca() {
		return this._marca;
	}
	set marca(marca) {
		this._marca = marca;
	}

	get conectores() {
		return this._conectores;
	}
	set conectores(conectores) {
		this._conectores = conectores;
	}
}
 */