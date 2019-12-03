class Movil{
    constructor(id,nombre,especie,raza,vida){
        this.id = id;//Para identificarlo de forma única
        this.nombre = nombre;
        this.especie = especie;
        this.raza = raza;
        this.vida = vida;
        this.propietario = null;
        this.votos = [];
    }

    get id(){
        return this._id;
    }

    set id(id){
        this._id = id; 
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre; 
    }

    get especie(){
        return this._especie;
    }

    set especie(especie){
        this._especie = especie; 
    }

    get raza(){
        return this._raza;
    }

    set raza(raza){
        this._raza = raza; 
    }

    get vida(){
        return this._vida;
    }

    set vida(vida){
        this._vida = vida; 
    }

    get persona(){
        return this._persona;
    }

    set persona(persona){
        this._persona = persona; 
    }

    get votos(){
        return this._votos;
    }

    set votos(votos){
        this._votos = votos; 
    }
    Propietario
    addVoto(voto){
        this.votos.push(voto);
    }
}

class Persona{
    constructor(id,nombre,edad){
        this._id = id;
        this._nombre = nombre;
        this._edad = edad;
        this.votos = [];
    }


    get id(){
        return this._id;
    }

    set id(id){
        this._id = id; 
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre; 
    }

    get edad(){
        return this._edad;
    }

    set edad(edad){
        this._edad = edad; 
    }

    get votos(){
        return this._votos;
    }

    set votos(votos){
        this._votos = votos; 
    }

    addVoto(voto){
        this.votos.push(voto);
    }
}

class Voto{
    constructor(id,persona,movil,puntuacion,observaciones){
        this.id = id;
        this.persona = persona;
        this.movil = movil;
        this.puntuacion = puntuacion;
        this.observaciones = observaciones;
    }

    get id(){
        return this._id;
    }

    set id(id){
        this._id = id; 
    }

    get persona(){
        return this._persona;
    }

    set persona(persona){
        this._persona = persona; 
    }

    get movil(){
        return this._movil;
    }

    set movil(movil){
        this._movil = movil; 
    }

    get puntuacion(){
        return this._puntuacion;
    }

    set puntuacion(puntuacion){
        this._puntuacion = puntuacion; 
    }

    get observaciones(){
        return this._observaciones;
    }

    set observaciones(observaciones){
        this._observaciones = observaciones; 
    }
}

function crearVoto(persona,movil,puntuacion,observaciones){
    let idVoto = listaTodosLosVotos.length +1;
    let voto = new Voto(idVoto,persona,movil,puntuacion,observaciones);
    persona.addVoto(voto);
    movil.addVoto(voto);
    listaTodosLosVotos.push(voto);
}

let listaTodosLosVotos = [];

let Andresito = new Persona(1,"Andresito",18);
let Alfredito = new Persona(2,"Alfredito",23);

let listaUsuarios = [];
listaUsuarios.push(Andresito);
listaUsuarios.push(Alfredito);

let n3310 = new Movil(1,"n3310","Nokia","Caniche",5);
let S10 = new Movil(2,"S10","Samsung","Siames",8);
let Xpro = new Movil(3,"Xpro","Apple","BullDog",15);
let RedmiNote7 = new Movil(4,"RedmiNote7","Xiaomi","Pastor Aleman",12);
let P30 = new Movil(5,"P30","Huawuei","San Bernando",9);
let OneTouch = new Movil(6,"OneTouch","Alcatel","Salchicha",4);
let Zblade = new Movil(8,"Zblade","Motorola","Común",9);
let Xtrem = new Movil(9,"Xtrem","Razer","Ratón de Praga",20);
let PowerCell = new Movil(10,"PowerCell","Duracell","Pastor Belga",12);
let Poor = new Movil(11,"Poor","ZTE","Loro",15);
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

crearVoto(Andresito,n3310,true,"Muy bonito");
crearVoto(Andresito,S10,true,"Muy mono");
crearVoto(Andresito,Xpro,false,"Muy Arisca");

crearVoto(Alfredito,P30,true,"Muy bonito");
crearVoto(Alfredito,OneTouch,true,"Muy mono");
crearVoto(Alfredito,Zblade,false,"Muy Arisca");


