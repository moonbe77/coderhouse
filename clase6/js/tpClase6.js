/*
Bernardo Munz 
moonbe77@gmail.com
camada 2390

##TP Clase 6

Crear el modulo IMDB

El array de peliculas tendra que ser privado del modulo.
El modulo tendra que poder agregar una pelicula (ID y titulo)
Validar que la pelicula ingresada no se encuentre y en caso de encontrarla mostrar un mensaje advirtiendo el error
El modulo tendra que eliminar una pelicula por ID
El modulo tendra que ordernar su array de pelicuas en base a una propiedad enviada por paramentro y mostrarlo en consola
El modulo tendra que persistir el array de peliculas en session o local storage para que luego se pueda recuperar y seguir agregando o eliminando
*/

var crearPeliculas = (function() {
    var pelis;
        
    function init() {
        function crearArrPeliculas() {
            //este array deberias ser tomado de un lugar externo, archivo o API
            peliculas = ["batman","super man","the avengers","crepusculo","harry potter","the hunger game"]
            return peliculas
        }        
        return {
            metodoPeliculasCargadas: function() {
                crearArrPeliculas(); 
                console.log(peliculas) 
                // Check browser support
                if (typeof(Storage) !== "undefined") {
                    // Store
                    localStorage.setItem("arrPeliculas",peliculas);                    
                    } else {
                    console.log( "Sorry, your browser does not support Web Storage...")}       
            }
        }
    }    
    return {
        crearInstanciaPeliculas: function() {
            if (!pelis) {
                pelis = init();
                return pelis;
            }
        }
    }
}())

var testeoInstancia = crearPeliculas.crearInstanciaPeliculas();
console.log(testeoInstancia.metodoPeliculasCargadas())
// Retrieve
var arrPeliculas=localStorage.getItem("arrPeliculas")
console.log(arrPeliculas ) //es string

//constructor
var AdminPeliculas = function(peli){
    this.id = function(){
        //devolver el id (indice del array tomado desde local storage) de la pelicula
        var arrPeliculas=localStorage.getItem("arrPeliculas").split(",")
     var idPeli = arrPeliculas.indexOf(peli)
     return idPeli
    },
    this.pelicula = peli,
    this.eliminar = function(){
        //eliminar la pelicula si existe seleccionando su id
        if(selUsuario.existe()){
            var arrPeliculas=localStorage.getItem("arrPeliculas").split(",")
             arrPeliculas.splice(selUsuario.id(),1)
            localStorage.setItem("arrPeliculas",arrPeliculas); 
        }else{
            console.log("No existe la pelicula nombre: ", peli)
        }
    },
    this.existe = function(nombre){
        //verificar si existe la pelicula
        var arrPeliculas=localStorage.getItem("arrPeliculas").split(",")
        var state = arrPeliculas.indexOf(peli)
        if (state == -1){
            return false
        }else{
            return true
        }
    }
}

var peli = new AdminPeliculas("Batman")
var selUsuario

//pedir nombre de la palicula y crear el objeto

var elegirPelicula = function(mensaje){
    if (mensaje == ""){mensaje="Pon un nombre de la pelicula"}else{mensaje}
    var peliculaUs =  prompt(mensaje,localStorage.getItem("arrPeliculas")).toLowerCase()
     selUsuario = new AdminPeliculas(peliculaUs)

        console.log(selUsuario.id() , selUsuario.pelicula)

     if (selUsuario.id() == -1){
         elegirPelicula("No se encuentra, escribe otra pelicula")
     }
    //return selUsuario
}
var addPelicula = function(){
    var peliculaUs =  prompt("Ingresa el nombre").toLowerCase()
    var arrPeliculas=localStorage.getItem("arrPeliculas").split(",")
    arrPeliculas.push(peliculaUs)
    localStorage.setItem("arrPeliculas",arrPeliculas); 
}

elegirPelicula("Pon un nombre de la pelicula")