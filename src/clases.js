Class placaBase{
	constructor(modelo,precio,marca,socket,conexiones,listaVotos){
this._modelo= modelo;
this._precio= precio;
this._marca=marca;
this._socket=socket;
this._conexiones=conexiones;
this._listaVotos=listaVotos;
}
get modelo(){
return this._modelo;
}
set modelo(modelo){
this._modelo=modelo;
}
get precio(){
return this._precio;
}

set precio(precio){
	this._precio=precio;
}

get marca(){
return this._marca;
}
set (marca){
this._marca=marca;
}
get socket(){
return this._socket;
}
set (socket){
this._socket=socket;
}
get conexiones(){
return this._conexiones;
}
set conexiones(conexiones){
this._conexiones=conexiones;
}
}

Class discoDuro{
constructor(marca,almacenamiento,conexion,pulgadas){
this._marca
this._almacenamiento
this._conexion
this._pulgadas
}

get marca(){
return this._marca;
}
set marca(marca){
this._marca=marca;
}
get almacenamiento(){
return this._almacenamiento;
}
set almacenamiento(almacenamiento){
this._almacenamiento=alamacenamiento;
}
get (conexion){
return this._conexion;
}
set conexion(conexion){
this._conexion=conexion;
}
get (pulgadas){
return this._pulgadas;
}
set pulgadas(pulgadas){
this._pulgadas=pulgadas;
}
}











Class procesadores{
	constructor(procesador,socket,marca){
this._procesador=procesador;
this._socket=socket;
this._marca=marca;
}
get procesador(){
return this._procesador;
}
set procesador(procesador){
this._procesador=procesador;
}

get socket(){
return this._socket;
}
set socket(socket){
this._socket=socket;
}

get marca(){
return this._marca;
}
set marca(marca){
this._marca;
}
}


Class tarjetaGrafica{
	constructor(marca,memoria,tipo){
this._marca=marca;
this._memoria=memoria;
this._tipo=tipo;

}




get marca(){
return this._marca;
}
set marca(marca){
this._marca;
}
get memoria(){
return this._memoria;
}
set memoria(memoria){
this._memoria;
}
get tipo(){
return this._tipo;
}
set tipo(tipo){
this._tipo;
}
}


Class memoriaRam{
	constructor(marca,frecuencia,almacenamiento){
this._marca=marca;
this._almacenamiento=almacenamiento;
this._frecuencia=frecuencia;

}

get marca(){
return this._marca;
}

set marca(marca){
this._marca=marca;
}

get almacenamiento(){
return this._almacenamiento;
}

set almacenamiento(almacenamiento){
this._almacenamiento=almacenamiento;
}

get frecuencia(){
return this._frecuencia;
}
set frecuencia(frecuencia){
this._frecuencia=frecuencia;
}

}

Class torres{
	constructor(marca,color,factor){
this._marca=marca;
this._color=color;
this._factor=factor;
}
get marca(){
return this._marca;
}
set marca(marca){
this._marca=marca;
}

get color(){
return this._color;
}
set color(color){
this._color=color;
}

get factor(){
return this._factor;
}
set factor(factor){
this._factor=factor;
}

}


Class fuenteA{
	constructor(marca,color,factor){
this._marca=marca;
this._tipo=tipo;
this._conectores;
}
get marca(){
return this._marca;
}
set tipo(tipo){
this._tipo=tipo;
}

get marca(){
return this._marca;
}
set marca(marca){
this._marca=marca;
}

get conectores(){
return this._conectores;
}
set conectores(conectores){
this._conectores=conectores;
}