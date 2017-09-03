/*
Bernardo Munz 
moonbe77@gmail.com
camada 2390
Crear una funcion que agregue objetos peliculas

El objeto pelicula Debera tener ID, titulo, descripcion, año, duracion, actores, director
Debera tener metodos para editar todas sus propiedades,
 menos su ID, y para los actores tendra que ir agregando uno a uno
*/
var id=1
function Pelicula (id,titulo,descripcion,anio,duracion,actores,director){
    this.id = id
    this.titulo = titulo
    this.descripcion = descripcion
    this.anio = anio
    this.duracion = duracion
    this.actores = actores
    this.director = director
}

//var addPelicula = function (){
    titulo = prompt("ingresa un nombre")
    desc = prompt("ingresa una descripción")
    anio = prompt("ingresa el añ de la pelicula")
    dur = prompt("ingresa la duración en formato -10:15-")
    actores = prompt("ingresa nombre de los actores separado por ;")
    dir = prompt("ingresa el nombre del director")   

    var pel1= new Pelicula(id,titulo,desc,anio,dur,actores,dir)
    id++
//}

//addPelicula()
