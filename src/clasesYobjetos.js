class Movil {
    constructor(id, modelo, marca, pantalla, rom, ram, bateria, camara, precio) {
        this._id = id;//Para identificarlo de forma única
        this._modelo = modelo;
        this._marca = marca;
        this._pantalla = pantalla;
        this._rom = rom;
        this._ram = ram;
        this._bateria = bateria;
        this._camara = camara;
        this._precio = precio;
        this.propietario = null;
        this.votos = [];
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get modelo() {
        return this._modelo;
    }

    set modelo(modelo) {
        this._modelo = modelo;
    }

    get marca() {
        return this._marca;
    }

    set marca(marca) {
        this._marca = marca;
    }

    get pantalla() {
        return this._pantalla;
    }

    set pantalla(pantalla) {
        this._pantalla = pantalla;
    }

    get rom() {
        return this._rom;
    }

    set rom(rom) {
        this._rom = rom;
    }
    get ram() {
        return this._ram;
    }

    set ram(ram) {
        this._ram = ram;
    }

    get bateria() {
        return this._bateria;
    }

    set bateria(bateria) {
        this._bateria = bateria;
    }

    get camara() {
        return this._camara;
    }

    set camara(camara) {
        this._camara = camara;
    }
    get precio() {
        return this._precio;
    }

    set precio(precio) {
        this._precio = precio;
    }


    get persona() {
        return this._persona;
    }

    set persona(persona) {
        this._persona = persona;
    }

    get votos() {
        return this._votos;
    }

    set votos(votos) {
        this._votos = votos;
    }
    Propietario
    addVoto(voto) {
        this.votos.push(voto);
    }
}

class Persona {
    constructor(id, nombre, edad) {
        this._id = id;
        this._nombre = nombre;
        this._edad = edad;
        this.votos = [];
        this._movilComprado = [];
    }


    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get nombre() {
        return this._nombre;
    }

    set modelo(nombre) {
        this._nombre = nombre;
    }

    get edad() {
        return this._edad;
    }

    set edad(edad) {
        this._edad = edad;
    }

    get votos() {
        return this._votos;
    }

    set votos(votos) {
        this._votos = votos;
    }

    get movilComprado() {
        return this._movilComprado;
    }

    set movilComprado(movilComprado) {
        this._movilComprado = this.movilComprado;
    }

    addVoto(voto) {
        this.votos.push(voto);
    }

    addMovil(movilC) {
        this.movilComprado.push(movilC);
    }

}



class Voto {
    constructor(id, persona, movil, puntuacion, observaciones) {
        this.id = id;
        this.persona = persona;
        this.movil = movil;
        this.puntuacion = puntuacion;
        this.observaciones = observaciones;
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get persona() {
        return this._persona;
    }

    set persona(persona) {
        this._persona = persona;
    }

    get movil() {
        return this._movil;
    }

    set movil(movil) {
        this._movil = movil;
    }

    get puntuacion() {
        return this._puntuacion;
    }

    set puntuacion(puntuacion) {
        this._puntuacion = puntuacion;
    }

    get observaciones() {
        return this._observaciones;
    }

    set observaciones(observaciones) {
        this._observaciones = observaciones;
    }
}


function crearVoto(persona, movil, puntuacion, observaciones) {
    let idVoto = listaTodosLosVotos.length + 1;
    let voto = new Voto(idVoto, persona, movil, puntuacion, observaciones);
    persona.addVoto(voto);
    movil.addVoto(voto);
    listaTodosLosVotos.push(voto);
}


let listaTodosLosVotos = [];

let Andresito = new Persona(1, "Andresito", 18);
let Alfredito = new Persona(2, "Alfredito", 23);
let Paquito = new Persona(3, "Paquito", 24, null);

let listaUsuarios = [];
listaUsuarios.push(Andresito);
listaUsuarios.push(Alfredito);
listaUsuarios.push(Paquito);

//constructor(id,modelo,marca,pantalla,rom,ram,bateria,camara){

let n3310 = new Movil(1, "n3310", "Nokia", 3, 1, 1, 500, 1, 20);
let S10 = new Movil(2, "S10", "Samsung", 8, 64, 8, 3000, 32, 500);
let Xpro = new Movil(3, "Xpro", "Apple", 10, 128, 16, 4000, 35, 800);
let RedmiNote7 = new Movil(4, "RedmiNote7", "Xiaomi", 7, 64, 8, 3500, 45, 350);
let P30 = new Movil(5, "P30", "Huawuei", 9, 64, 16, 3000, 64, 350);
let OneTouch = new Movil(6, "OneTouch", "Alcatel", 2, 1, 1, 400, 1, 20);
let Zblade = new Movil(8, "Zblade", "Motorola", 5, 64, 8, 3500, 64, 600);
let Xtrem = new Movil(9, "Xtrem", "Razer", 4, 64, 8, 5000, 64, 500);
let PowerCell = new Movil(10, "PowerCell", "Duracell", 3, 64, 8, 15000, 64, 400);
let Poor = new Movil(11, "Poor", "ZTE", 4, 32, 4, 3000, 15, 120);

let n3330 = new Movil(12, "n3330", "Nokia", 3, 1, 1, 500, 1, 20);
let S9 = new Movil(14, "S9", "Samsung", 8, 64, 8, 3000, 32, 500);
let X = new Movil(13, "X", "Apple", 10, 128, 16, 4000, 35, 800);

/**10 moviles que cumplan varios requistos para la primera funcion de Gestion */
let Prototype1 = new Movil(14, "Prototype1", "Secret", 11, 256, 32, 3700, 80, 1000)
let Prototype2 = new Movil(15, "Prototype2", "Secret", 11, 256, 32, 3700, 80, 1000)
let Prototype3 = new Movil(16, "Prototype3", "Secret", 11, 256, 32, 3700, 80, 1000)
let Prototype4 = new Movil(17, "Prototype4", "Secret", 11, 256, 32, 3700, 80, 1000)
let Prototype5 = new Movil(18, "Prototype5", "Secret", 11, 256, 32, 3700, 80, 1000)
let Prototype6 = new Movil(19, "Prototype6", "Secret", 11, 256, 32, 3700, 80, 1000)
let Prototype7 = new Movil(20, "Prototype7", "Secret", 11, 256, 32, 3700, 80, 1000)
let Prototype8 = new Movil(21, "Prototype8", "Secret", 11, 256, 32, 3700, 80, 1000)
let Prototype9 = new Movil(22, "Prototype9", "Secret", 11, 256, 32, 3700, 80, 1000)
let Prototype10 = new Movil(23, "Prototype10", "Secret", 11, 256, 32, 3700, 80, 1000)

let listaMoviles = [];

listaMoviles.push(n3310);
listaMoviles.push(S10);
listaMoviles.push(Xpro);
listaMoviles.push(RedmiNote7);
listaMoviles.push(P30);
listaMoviles.push(OneTouch);
listaMoviles.push(Zblade);
listaMoviles.push(Xtrem);
listaMoviles.push(PowerCell);
listaMoviles.push(Poor);

listaMoviles.push(n3330);
listaMoviles.push(S9);
listaMoviles.push(X);
/**
 * Subiendo los prototipos para primera funcion de Gestion
 */
listaMoviles.push(Prototype1);
listaMoviles.push(Prototype2);
listaMoviles.push(Prototype3);
listaMoviles.push(Prototype4);
listaMoviles.push(Prototype5);
listaMoviles.push(Prototype6);
listaMoviles.push(Prototype7);
listaMoviles.push(Prototype8);
listaMoviles.push(Prototype9);
listaMoviles.push(Prototype10);



crearVoto(Andresito, n3310, true, "Indestructible");
crearVoto(Andresito, S10, true, "Ok");
crearVoto(Andresito, Xpro, false, "Hype");

crearVoto(Alfredito, P30, true, "Camaron");
crearVoto(Alfredito, OneTouch, true, "Retro");
crearVoto(Alfredito, Zblade, false, "Plantalla plegable");

Paquito.addMovil(n3310);
Paquito.addMovil(S10);
Alfredito.addMovil(Xpro);