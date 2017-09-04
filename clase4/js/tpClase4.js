/*
Bernardo Munz 
moonbe77@gmail.com
camada 2390
Crear una funcion que agregue objetos peliculas

El objeto pelicula Debera tener ID, titulo, descripcion, año, duracion, actores, director
Debera tener metodos para editar todas sus propiedades,
 menos su ID, y para los actores tendra que ir agregando uno a uno
*/

function Pelicula (id,titulo,descripcion,anio,duracion,actores,director){
    this.id = id
    this.titulo = titulo
    this.descripcion = descripcion
    this.anio = anio
    this.duracion = duracion
    this.actores = actores
    this.director = director
    this.modTitulo = function(){
        newTitulo = prompt("mod Tiutlo",this.titulo)
        this.titulo = newTitulo
    }
    this.modDescripcion = function(){
        newDesc = prompt("mod Descripcion",this.descripcion)
        this.descripcion = newDesc
    }
    this.modAnio = function(){
        newAnio = prompt("mod anio",this.anio)
        this.anio = newAnio
    }
    this.modDuracion = function(){
        newDur = prompt("mod duración", this.duracion)
        this.duracion = newDur
    }
    this.modActor = function(){
        newActor = prompt("mod actor",this.actores)
        this.actores.push(newActor)
    }
    this.modDirector = function(){
        newDur = prompt("mod director",this.director)
        this.titulo = newDur
    }
    
}


    /*titulo = prompt("ingresa un nombre")
    desc = prompt("ingresa una descripción")
    anio = prompt("ingresa el añ de la pelicula")
    dur = prompt("ingresa la duración en formato -10:15-")
    actores = prompt("ingresa nombre de los actores separado por ;")
    dir = prompt("ingresa el nombre del director")*/
var id=1
var titulo = "Valerian and the City of a Thousand Planets"
var desc = "A dark force threatens Alpha, a vast metropolis and home to species from a        thousand planets. Special operatives Valerian and Laureline must race to identify the marauding menace and safeguard not just Alpha, but the future of the universe."
var anio = "2017"
var dur = "02:17"
var actores = ["Dane DeHaan","Cara Delevingne","Clive Owen"]
var dir = "Luc Besson" 

//creo el objeto pelicula1
var pelicula1= new Pelicula(id,titulo,desc,anio,dur,actores,dir)

//muestro los datos por pantall
var mostrarPelicula = function(titulo){  
  
document.write('id: ',titulo.id,'<br />Titulo: ',titulo.titulo,'<br />Descripción: ',titulo.descripcion,'<br />Año: ',titulo.anio,'<br />Duración: ',titulo.duracion,'<br />Actores:',titulo.actores[0],'<br />Director: ',titulo.director)

}
    

