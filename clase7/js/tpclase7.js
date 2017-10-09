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
            //este array deberias ser tomado de un lugar externo, archivo 
            peliculas = [
                {id:1, name:"batman", desc:"alguna descripcion", img:"https://www.w3schools.com/html/html5.gif"},
                {id:2, name:"super man", desc:"alguna descripcion", img:"https://www.w3schools.com/html/html5.gif"},
                {id:3, name:"the avengers", desc:"alguna descripcion", img:"https://www.w3schools.com/html/html5.gif"},
                {id:4, name:"crepusculo", desc:"alguna descripcion", img:"https://www.w3schools.com/html/html5.gif"},
                {id:5, name:"harry potter", desc:"alguna descripcion", img:"https://www.w3schools.com/html/html5.gif"},
                {id:6, name:"the hunger game", desc:"alguna descripcion", img:"https://www.w3schools.com/html/html5.gif"}
            ]
            if(localStorage.getItem("arrPeliculas") == null){
                // Check browser support
                if (typeof(Storage) !== "undefined") {
                    // Store
                    localStorage.setItem("arrPeliculas",JSON.stringify(peliculas));                    
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
var arrPeliculas=JSON.parse(localStorage.getItem("arrPeliculas"))
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

var renderDom = function (h1,p,img){
    var contenedor = document.querySelector("#contenedor") 
    var nodoH1 = document.createElement("h1");                
    var nodoP = document.createElement("p");                
    var nodoImg = document.createElement("img");                
    var textH1= document.createTextNode(h1);
    var textP= document.createTextNode(p);
    var textImg= document.createTextNode(img);
    nodoH1.appendChild(textH1);                              
    nodoP.appendChild(textP);                              
    nodoImg.appendChild(textImg);                              
   contenedor.appendChild(nodoH1); 
   contenedor.appendChild(nodoP); 
   contenedor.appendChild(nodoImg).src = img;
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
    for ( var i in arrPeliculas){
       // console.log("awsdf: ",i)
        renderDom(arrPeliculas[i].name,arrPeliculas[i].desc,arrPeliculas[i].img)
    }
}

//elegirPelicula()
mostrarPeliculas()
