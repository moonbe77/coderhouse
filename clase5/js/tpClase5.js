/*
Bernardo Munz 
moonbe77@gmail.com
camada 2390

##TP Clase 5

Crear un array de peliculas
Crear una funcion que agrege una pelicula al array de peliculas
La pelicula debera tener un ID y un Titulo
Crear una funcion que evalue antes de agregar que la pelicula no fue ingresada previamente
Crear una funcion que ordene las peliculas por Titulo y por ID
Crear una funcion que elimine una pelicula por su ID.
*/
var id = 0
var peliculas = []

//crear id que no se repita, sumando 1 cada vez que se agregue una pelicula al array
var crearId = function(){    
    id = id+1   
    return id
}

var addPelicula = function (titulo){
    var ver = verificarTitulo(titulo)
    if (ver) {
        alert("esta pelicula ya existe")
    }else{
      idC = crearId()
    peliculas.push([idC,titulo])   
    }     
}

var verificarTitulo = function(titu){
    for (var i = 0; i < peliculas.length; i++) {
        if (peliculas[i].indexOf(titu)>-1){
            var state = true //devuelve true cuando encuentra el nombre
            //console.log(i,state)  
            break         
        }else{var state = false}     
    }
    //console.log(i," Existe pelicula ",state)
    return state
}

//quitar pelicula segun el id
var delPelicula = function(id){
    //con index of busco el indice que tiene dentro el id 
    for (var i = 0; i < peliculas.length; i++) {
        if(peliculas[i].indexOf(id) != -1){ 
               var delI = i
               peliculas.splice(delI,1)      
           break 
        }  
    }    
       
}

var ordenar = function (x){//x es para definir si ordena por titulo o id
    peliculas.sort()
    return peliculas
}


addPelicula("titulo")
addPelicula("otro titulo")
addPelicula("el vecino")
addPelicula("la casa de al lado")

