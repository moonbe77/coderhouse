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


##TP Clase t
# Mejorar el modulo IMDB
​
- El modulo Debera, de forma privada o publica, mostrar/renderizar las peliculas en el DOM
- El objeto pelicula ahora Debera tener la propiedad descripcion e imagen
- El titulo Debera ser un H1, la descipcion un P y la imagen un img

*/

var crearPeliculas = (function() {
    var pelis;
    
    function init() {
        function crearArrPeliculas() {
            //este array deberias ser tomado de un lugar externo, archivo o API MODIFICADO EL CRITERIO
            peliculas = [{name:"batman"},{name:"super man"},{name:"the avengers"},{name:"crepusculo"},{name:"harry potter"},{name:"the hunger"},{name:"game"}]
            if(localStorage.getItem("arrPeliculas") == null){
                // Check browser support
                if (typeof(Storage) !== "undefined") {
                    // Store
                    localStorage.setItem("arrPeliculas",peliculas);                    
                } else {
                    console.log( "Sorry, your browser does not support Web Storage...")
                }
            }
            return peliculas
        }        
        return {
            metodoPeliculasCargadas: function() {
                crearArrPeliculas(); 
                
                console.log(peliculas) 
                
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
var arrPeliculas=localStorage.getItem("arrPeliculas").split(",")
console.log(arrPeliculas ) //es string

var selUsuario

//constructor
var AdminPeliculas = function(peli){
    this.id = function(){
        //devolver el id (indice del array tomado desde local storage) de la pelicula        
        var idPeli = arrPeliculas.indexOf(peli)
        return idPeli
    },
    this.pelicula = peli,
    this.eliminar = function(){
        //eliminar la pelicula si existe seleccionando su id
        if(selUsuario.existe()){
            arrPeliculas.splice(selUsuario.id(),1)
            localStorage.setItem("arrPeliculas",arrPeliculas); 
        }else{
            console.log("No existe la pelicula nombre: ", peli)
            renderDom("No existe la pelicula nombre: ", peli)
        }
    },
    this.existe = function(nombre){
        //verificar si existe la pelicula
        var state = arrPeliculas.indexOf(peli)
        if (state == -1){
            return false
        }else{
            return true
        }
    }
}

//pedir nombre de la palicula y crear el objeto
var elegirPelicula = function(mensaje){
    if (mensaje == null){mensaje="Pon un nombre de la pelicula"}else{mensaje}
    var peliculaUs =  prompt(mensaje,localStorage.getItem("arrPeliculas")).toLowerCase()
    selUsuario = new AdminPeliculas(peliculaUs)
    
    var datosPeli= selUsuario.id()+"|"+selUsuario.pelicula

    if (selUsuario.existe){
       // elegirPelicula("No se encuentra, escribe otra pelicula")
        renderDom("No se encuentra, escribe otra pelicula")
    } 
     console.log(datosPeli)
    renderDom(datosPeli)
    //return selUsuario
   // mostrarPeliculas()
}

var renderDom = function (valor){
    var contenedor = document.querySelector("#contenedor") 
    var node = document.createElement("p");                
    var textnode = document.createTextNode(valor);
    node.appendChild(textnode);                              
   contenedor.appendChild(node); 
}

var addPelicula = function(){
    var peliculaUs =  prompt("Ingresa el nombre").toLowerCase()
    var arrPeliculas=localStorage.getItem("arrPeliculas").split(",")
    arrPeliculas.push(peliculaUs)
    localStorage.setItem("arrPeliculas",arrPeliculas); 
    mostrarPeliculas()
}

var mostrarPeliculas = function(){
    contenedor.innerHTML = ""
    var arrPeliculas=localStorage.getItem("arrPeliculas").split(",")
    for ( var i=0; i < arrPeliculas.length; i++){
       // console.log("awsdf: ",i)
        renderDom(arrPeliculas[i])
    }
}

//elegirPelicula()
mostrarPeliculas()
